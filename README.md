# thiagobraga.dev

A premium, Nordic-inspired personal portfolio and blog built for 2026. This project features a sophisticated "Nord" design system, a lightning-fast build pipeline with Tailwind CSS v4, and a modular architecture designed for high performance and visual excellence.

## Features

- **Nordic Design System**: A meticulously crafted aesthetic based on the Nord color palette, featuring glassmorphism, smooth animations (`fade-up`, `scroll-bounce`), and premium typography (Plus Jakarta Sans, Inter, Manrope).
- **Tailwind CSS v4**: Leveraging the latest CSS-first configuration engine for zero-runtime overhead and simplified styling.
- **Vite & React (SWC)**: A modern, high-performance development environment with Hot Module Replacement (HMR).
- **Supabase Integration**: Robust backend-as-a-service for managing blog posts, projects, and author data.
- **Dockerized Workflow**: Fully containerized development environment for consistency across all platforms.
- **Chezmoi Automation**: Integrated dotfile and environment provisioning script for seamless developer onboarding.

## Project Structure

```text
├── .docker/          # Docker system configuration
├── public/           # Static assets (images, favicon, etc.)
│   ├── images/       # Nordic-themed project and pet assets
│   └── chezmoi       # Automated environment setup script
├── src/
│   ├── components/   # Atomic design components (UI, Layout, Home)
│   ├── hooks/        # Custom React hooks (Supabase, UI logic)
│   ├── integrations/ # Supabase client and database types
│   ├── lib/          # Utilities and mock data for local dev
│   └── pages/        # Main application routes (Index, Blog, Admin)
└── supabase/         # Local Supabase configuration and schemas
```

## Prerequisites

- **Bun**: v1.2.6 or later (Recommended package manager)
- **Docker & Docker Compose**: For containerized development
- **Supabase CLI**: For database management and migrations

## Install

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/thiagobraga/thiagobraga.dev.git
    cd thiagobraga.dev
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

3.  **Set up environment variables**:
    ```bash
    cp .env.example .env
    # Add your Supabase URL and Anon Key
    ```

4.  **Run with Docker**:
    ```bash
    docker compose up -d
    ```

5.  **Run locally (Alternative)**:
    ```bash
    bun run dev
    ```

---

*Built with precision and a passion for minimalist, high-performance web experiences.*

## Stack

| Resource | Status |
|----------|--------|
| [React](https://react.dev) | `^18.3.1` |
| [TypeScript](https://www.typescriptlang.org) | `^5.5.3` |
| [Vite](https://vite.dev) | `^6.0.0` |
| [Vitest](https://vitest.dev) | `^4.1.6` |
| [Tailwind CSS](https://tailwindcss.com) | `^4.0.0` |
| [Radix UI](https://www.radix-ui.com) | `^1.1.2` |
| [TanStack Query](https://tanstack.com/query) | `^5.56.2` |
| [Zod](https://zod.dev) | `^3.23.8` |
| [Bun](https://bun.sh) | `1.2.6` |
| [Docker](https://www.docker.com) | Yes |
| [Docker Compose](https://docs.docker.com/compose/) | Yes |
| Entrypoint | Yes |
| Image | `oven/bun:1.1.20-debian` |
| AI Agents | `AGENTS`, `GEMINI` |
