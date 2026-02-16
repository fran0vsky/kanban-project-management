# kanban-project-management

Full-stack Kanban project management: Angular + NestJS in an Nx monorepo, Supabase (PostgreSQL), E2E tests with Playwright.

## Structure

- **apps/web** — Angular frontend (standalone, Vite)
- **apps/api** — NestJS backend
- **apps/web-e2e** — Playwright E2E for web
- **libs/shared** — Types, DTOs (shared by web & api)
- **libs/ui**, **libs/data-access**, **libs/auth** — Angular libraries

See `docs/spec-project.md` for the full spec and roadmap.

## Getting started

```bash
npm install
```

Copy `.env.example` to `.env` and fill in your Supabase and API values (see Phase 1 docs if needed).

**Run locally**

- Frontend: `npm run start:web` or `nx serve web`
- Backend: `npm run start:api` or `nx serve api`

**Build**

- `nx build web` / `nx build api` or `npm run build:web` / `npm run build:api`

**E2E (Playwright)**  
`nx e2e web-e2e` or `npm run e2e:web`
