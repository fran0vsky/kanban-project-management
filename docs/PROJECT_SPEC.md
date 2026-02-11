# Project Specification: Kanban Workflow & Project Management Platform

## Project Goal

Build a modern fullstack workflow and project management platform using a **scalable monorepo architecture**. The application allows users to manage projects, tasks, and team collaboration through a **Kanban-style board**.

**Main focus:** Learning and showcasing

- Angular frontend development
- NestJS backend architecture
- Nx monorepo structure
- PostgreSQL database integration (Supabase)
- Automated end-to-end testing with Playwright
- Clean code, real-world features, and deployment-ready setup

---

## Tech Stack

| Layer      | Choices |
|-----------|---------|
| **Frontend** | Angular (standalone components, routing, reactive forms); Angular Material or custom UI; drag & drop Kanban board |
| **Backend**  | NestJS REST API; modular, feature-based architecture; auth layer |
| **Database** | Supabase (PostgreSQL); relational modeling |
| **Monorepo** | Nx workspace; shared libs for types, DTOs, utilities |
| **Testing**  | Playwright E2E; optional unit tests for backend |
| **DevOps**   | GitHub Actions CI; optional Docker; environment-based config |

---

## Core Features

### Authentication & User Management

- User registration and login
- JWT-based authentication
- Role-based access control (Admin / Member)

### Project Management

- Create and manage projects
- Invite users to projects
- Project-specific permissions

### Task Workflow System

- Create tasks inside projects
- Task statuses: **To Do**, **In Progress**, **Done**
- Assign tasks to team members
- Due dates and priority levels

### Kanban Board UI

- Visual board with draggable task cards
- Real-time status updates
- Filtering and searching tasks

### Collaboration

- Task comments
- Activity history (audit log of changes)

---

## Database Entities (Initial Model)

| Entity         | Purpose |
|----------------|--------|
| **User**       | User accounts and auth |
| **Project**    | Projects |
| **ProjectMember** | User–project membership and roles |
| **Task**       | Tasks with status, assignee, due date, priority |
| **Comment**    | Comments on tasks |
| **ActivityLog**| Audit trail of changes |

**Relationships:**

- A user can belong to multiple projects.
- A project contains many tasks.
- Tasks can have comments and status history.

---

## API Modules (NestJS)

Each module includes: **Controller**, **Service**, **DTOs**, **Validation**, **Database access layer**.

| Module        | Responsibility |
|---------------|----------------|
| **AuthModule**   | Login, register, JWT |
| **UsersModule**  | User CRUD, profile |
| **ProjectsModule** | Projects, members, invites |
| **TasksModule**   | Tasks, status, assignee |
| **CommentsModule**| Task comments |
| **ActivityModule**| Activity/audit log |

---

## Nx Monorepo Structure

```
apps/
  web/          # Angular frontend
  api/          # NestJS backend

libs/
  shared/       # Types, interfaces, DTOs
  ui/           # Reusable UI components
  data-access/  # API client services
  auth/         # Guards, interceptors
```

---

## Playwright E2E Testing Plan

Automated user flows:

1. User can register and log in
2. User can create a new project
3. User can create and move tasks on the board
4. User can assign tasks to other members
5. User can comment on tasks

Tests run in CI via GitHub Actions.

---

## Development Roadmap

| Phase | Focus |
|-------|--------|
| **Phase 1 — Setup** | Initialize Nx workspace; Angular + NestJS apps; connect Supabase; basic structure |
| **Phase 2 — Auth** | Login/register; JWT; protected routes |
| **Phase 3 — Projects & Tasks** | CRUD for projects and tasks; task status workflow |
| **Phase 4 — Kanban Board** | Drag & drop UI; status updates |
| **Phase 5 — Collaboration** | Comments; activity history |
| **Phase 6 — Testing & Deployment** | Playwright E2E; CI pipeline; deployment |

---

## Expected Outcome

A **production-style portfolio project** demonstrating:

- Monorepo architecture
- Secure authentication
- Relational database design
- Modern frontend UI patterns
- Automated testing
- Real-world project complexity
