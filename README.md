# thiagobraga.dev

A premium personal portfolio and blog built with React, TypeScript, and [Nord](https://www.nordtheme.com) design system. Features glassmorphism UI, smooth scroll animations, and modular architecture for performance and visual excellence.

## Features

- **[Nord Theme](https://www.nordtheme.com)**: Arctic, north-bluish color palette with glassmorphism effects, gradient overlays, and frosted glass aesthetics.
- **Smooth Scroll Animations**: GSAP ScrollTrigger + Lenis smooth scroll integration for parallax effects and entrance animations.
- **Glass UI Components**: ProjectsSection with image carousel, skills showcase, and responsive card layouts with edge bleed.
- **Home Sections**: About, Timeline, Blog, Music, and Pets sections with mock data integration.
- **Tailwind CSS v4**: Modern CSS-first styling with custom color variables (brand colors for projects).
- **React 18 + TypeScript**: Type-safe component architecture with React Router v7 future flags.
- **Vitest + Testing Library**: Full test suite with jsdom environment and component testing.
- **Vite HMR**: Fast development with Hot Module Replacement compatible with Docker.
- **Dockerized Workflow**: Fully containerized dev/prod environments with Bun package manager.
- **Supabase Ready**: Backend setup for blog posts, projects, and author data (currently using mock data).

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

### Runtime & Build
| Resource | Version |
|----------|---------|
| [React](https://react.dev) | `^18.3.1` |
| [TypeScript](https://www.typescriptlang.org) | `^5.5.3` |
| [Vite](https://vite.dev) | `^6.0.0` |
| [Bun](https://bun.sh) | `1.2.6` |

### Styling & UI
| Resource | Version |
|----------|---------|
| [Tailwind CSS](https://tailwindcss.com) | `^4.0.0` |
| [Radix UI](https://www.radix-ui.com) | `^1.1.2` |
| [Nord Theme](https://www.nordtheme.com) | Design System |

### Animations & Effects
| Resource | Version |
|----------|---------|
| [GSAP](https://gsap.com) | `^3.15.0` |
| [Lenis](https://lenis.studiofreight.com) | `^1.3.21` |

### Data & State
| Resource | Version |
|----------|---------|
| [TanStack Query](https://tanstack.com/query) | `^5.56.2` |
| [Zod](https://zod.dev) | `^3.23.8` |
| [React Hook Form](https://react-hook-form.com) | `^7.53.0` |

### Testing
| Resource | Version |
|----------|---------|
| [Vitest](https://vitest.dev) | `^4.1.6` |
| [Testing Library](https://testing-library.com) | `^16.3.2` |

### Infrastructure
| Resource | Status |
|----------|--------|
| [Docker](https://www.docker.com) | Containerized |
| [Docker Compose](https://docs.docker.com/compose/) | Orchestration |
| Entrypoint | Custom |
| Base Image | `oven/bun:1.1.20-debian` |
