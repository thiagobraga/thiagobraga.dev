Run Docker Compose operations for the dev environment.

Usage: `/project:docker [up|down|logs|restart|status]`

## Operations

Parse `$ARGUMENTS` (default: `up` if empty):

| Argument | Command | Notes |
|----------|---------|-------|
| `up` | `docker compose up -d` | Start detached |
| `down` | `docker compose down` | Stop and remove containers |
| `logs` | `docker compose logs -f` | Follow logs (Ctrl+C to stop) |
| `restart` | `docker compose restart` | Restart all services |
| `status` | `docker compose ps` | Show running containers |
| `build` | `docker compose up -d --build` | Rebuild image and start |

## After `up`

Report:
- Container status
- URL: `https://thiagobraga.dev.local` (via Traefik, requires local DNS or `/etc/hosts`)
- Vite HMR port: 443

## Notes

- Config: `compose.yml` + `.docker/Dockerfile`
- Vite dev server runs inside container on port 5173
- File watching uses polling (Docker-compatible)
- Traefik routes HTTPS traffic to the container
