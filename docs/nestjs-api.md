# NestJS API Conventions

- **Feature modules:** AuthModule, UsersModule, ProjectsModule, TasksModule, CommentsModule, ActivityModule. Each has Controller, Service, DTOs, validation, and DB access.
- **DTOs:** Prefer shared DTOs from `libs/shared` where possible; use class-validator for request validation.
- **Layers:** Controller → Service → repository/ORM. Keep controllers thin; business logic in services.
- **Auth:** JWT-based; use guards for protected routes; RBAC (Admin / Member) where needed.
- **Database:** Supabase (PostgreSQL). Use TypeORM/Prisma or Supabase client consistently; relational model: User, Project, ProjectMember, Task, Comment, ActivityLog.
