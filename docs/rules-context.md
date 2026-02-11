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

---

## Commits

Use **Conventional Commits** so history is easy to scan and filter.

**Format:** `type(scope): short description`

- **type** (required): what kind of change
  - `feat` — new feature or capability
  - `fix` — bug fix
  - `chore` — tooling, config, deps, no app logic (e.g. Nx, ESLint, scripts)
  - `docs` — documentation only (e.g. spec, rules, README)
  - `refactor` — code change that doesn’t add a feature or fix a bug
  - `test` — adding or updating tests
  - `style` — formatting, no code change
- **scope** (optional): where it applies — `web`, `api`, `shared`, `ui`, `auth`, `data-access`, or omit if global.
- **description:** imperative, lowercase after the colon; no period at the end.

**Examples:**

- `feat(api): add projects CRUD endpoints`
- `feat(web): kanban board with drag and drop`
- `fix(web): task assignee not updating`
- `chore: add Nx monorepo with Angular and NestJS`
- `docs: introduce spec-* and rules-* naming convention`
- `refactor(shared): extract task status to shared enum`
