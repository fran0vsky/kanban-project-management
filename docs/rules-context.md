# Project Context

**Goal:** Fullstack Kanban workflow & project management in an Nx monorepo (learning + portfolio).

**Stack:** Angular (apps/web) + NestJS (apps/api), Supabase (PostgreSQL), Playwright E2E, GitHub Actions CI.

**Structure:**
- `apps/web` — Angular (standalone components, reactive forms, Kanban drag & drop).
- `apps/api` — NestJS REST API, feature modules: Auth, Users, Projects, Tasks, Comments, Activity.
- `libs/shared` — Types, DTOs, utilities. `libs/ui`, `libs/data-access`, `libs/auth` — frontend libs.

**Conventions:** Feature-based modules; shared DTOs/types in libs; JWT auth; role-based access (Admin/Member). Prefer clean, deployment-ready code.

**Roadmap:** 1) Setup (Nx, Supabase) → 2) Auth → 3) Projects & Tasks CRUD → 4) Kanban UI → 5) Comments & Activity → 6) E2E + CI + deploy.

Reference full spec: `spec-project.md`.
