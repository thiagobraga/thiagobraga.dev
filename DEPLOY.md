# Deploy — GitHub Actions → OCI via GHCR

Every push to `main` builds a Docker image, pushes it to **GHCR** (`ghcr.io`), then SSHes
into the OCI instance and rolls the new image out behind your existing **Traefik** proxy
(external `proxy` network, cert resolver `letsencrypt`).

```
push main → Actions: build image → ghcr.io/<owner>/thiagobraga.dev:<sha> + :latest
          → Actions: ssh OCI → docker compose -f compose.prod.yml pull && up -d
OCI: Traefik (proxy net, Let's Encrypt) → app:8080
```

Files: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
[`compose.prod.yml`](compose.prod.yml).
Image is the `production` target of [`.docker/Dockerfile`](.docker/Dockerfile)
(`bun serve ./dist --port 8080`).

---

## One-time server provisioning (OCI box)

Run as the default sudo user (`opc` on Oracle Linux, `ubuntu` on Ubuntu).

### 1. Install Docker Engine + compose plugin
Follow Docker's official install for your distro, then `sudo systemctl enable --now docker`.

### 2. Dedicated, sudo-less deploy user
```bash
sudo useradd -m -s /bin/bash deploy
sudo usermod -aG docker deploy        # docker access, NO sudo — small blast radius
sudo install -d -m 700 -o deploy -g deploy /home/deploy/.ssh
```

### 3. Open the firewall — BOTH layers (OCI gotcha)
- **OCI Console → VCN → Security List:** ingress TCP 80 & 443 from `0.0.0.0/0`.
  Keep 22 restricted to your IP if you can.
- **Host iptables** (OCI images ship restrictive rules):
  ```bash
  sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
  sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
  sudo netfilter-persistent save        # Ubuntu  (Oracle Linux: sudo iptables-save)
  ```

### 4. Proxy network + Traefik
You already run Traefik. Just ensure the `proxy` network exists and Traefik is on it:
```bash
docker network create proxy   # no-op if it already exists
```

### 5. Dedicated SSH deploy key (ed25519, this deploy only)
On your laptop:
```bash
ssh-keygen -t ed25519 -C "gha-deploy@thiagobraga.dev" -f gha_deploy -N ""
```
- Append `gha_deploy.pub` → `/home/deploy/.ssh/authorized_keys` on the box.
- `gha_deploy` (private) → GitHub secret **`SSH_KEY`**.
- Host key for verification → GitHub secret **`SSH_KNOWN_HOSTS`**:
  ```bash
  ssh-keyscan -t ed25519 <OCI_PUBLIC_IP>
  ```

### 6. App directory + compose file
```bash
sudo install -d -o deploy -g deploy /home/deploy/app
```
Copy `compose.prod.yml` to `/home/deploy/app/compose.prod.yml` and create
`/home/deploy/app/.env`:
```env
GHCR_OWNER=<your-github-owner-lowercased>
```

### 7. DNS
A records `thiagobraga.dev` and `www.thiagobraga.dev` → OCI public IP.

---

## GitHub configuration

### Secrets — Settings → Environments → `production`
| Secret | Value |
|---|---|
| `SSH_HOST` | OCI public IP |
| `SSH_USER` | `deploy` |
| `SSH_KEY` | contents of `gha_deploy` (private key) |
| `SSH_KNOWN_HOSTS` | output of `ssh-keyscan -t ed25519 <IP>` |

Add a required-reviewer protection rule on the `production` environment so deploys are gated.

### GHCR package visibility
After the first successful build, set the package **public** (repo → Packages → package →
Settings → Change visibility). The image is only built static assets + bun, no secrets — public
means the **server pulls with no credentials**, so there is no registry PAT to store or rotate.

> Prefer private? Add a read-only PAT as secret `GHCR_PAT` and prepend the deploy script with:
> `echo "$GHCR_PAT" | docker login ghcr.io -u <user> --password-stdin` (pass `GHCR_PAT` via the
> ssh-action `envs:`).

---

## Verify (end-to-end)

1. **Local image sanity:**
   `docker build -f .docker/Dockerfile --target production -t test .` →
   `docker run -p 8080:8080 test` → `curl -I localhost:8080` is `200`.
2. **First CI run:** push a branch + run via *Actions → Deploy → Run workflow*; confirm
   `ghcr.io/<owner>/thiagobraga.dev:<sha>` appears under repo → Packages.
3. **Server dry-run:** on the box, `cd /home/deploy/app && docker compose -f compose.prod.yml pull && docker compose -f compose.prod.yml up -d`;
   `docker ps` shows `thiagobraga-app` on the `proxy` network.
4. **End-to-end:** merge to `main`, watch the `deploy` job pass, then
   `curl -I https://thiagobraga.dev` → `200` with a valid Let's Encrypt cert (`curl -v` shows issuer).
5. **Rollback:** point the image to a prior `:<sha>` tag and `up -d` again.

---

## Security summary
- `GITHUB_TOKEN` scoped `packages: write` only in the build job; deploy job has none.
- No long-lived registry creds (public package) — or one read-only PAT if private.
- Dedicated ed25519 key, deploy user, **no sudo**; host-key verified (no `StrictHostKeyChecking=no`).
- `production` environment gate + environment-scoped secrets.
- All actions pinned to commit SHA (supply-chain).
- Concurrency guard prevents racing deploys; immutable `:<sha>` tags enable rollback.
- TLS auto-managed by Traefik + Let's Encrypt; minimal firewall (80/443; 22 IP-restricted).
- No source or build toolchain on the server — only the prebuilt image + one compose file.
