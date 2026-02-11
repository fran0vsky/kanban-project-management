# Angular Web Conventions

- **Standalone components** only; use routing and reactive forms.
- **UI:** Angular Material or custom components; Kanban board with drag & drop (e.g. CDK drag-drop).
- **State/API:** Use `libs/data-access` for API client services; `libs/auth` for guards and interceptors. Share types/DTOs from `libs/shared`.
- **Structure:** Feature-based organization; lazy-loaded routes where appropriate. Keep components presentational where possible; data fetching in services.
