# Angular Web Conventions

## Style

- Always use `inject()` to inject dependencies (never use constructor parameters).

## Architecture

### Service

- Must have `@Injectable({ providedIn: 'root' })` (use a different scope only when the service is feature-scoped).
- File suffix: `.service.ts`; name suffix: `Service`.
- Inject `HttpClient` (or inject API / data-access services that wrap it).

**Methods:** Name like repository operations: `getOne`, `getAll`, `addOne`, `removeOne`, `updateOne`.

### Model

- File suffix: `.model.ts`; name suffix: `Model`.
- All properties must be `readonly` and explicitly typed.
- No methods (data shape only). Prefer types/models from `libs/shared` where applicable.

### Component

- Use `@Component` decorator; inject services via `inject()`.
- Prefer signals over lifecycle hooks: use `computed`, `effect` instead of `ngOnInit`/`ngOnChanges` where possible.
- Use reactive patterns: avoid setting component properties inside `subscribe` callbacks.

**Properties:** Prefer signal-based state. When the source is an `Observable`, use `toSignal()`.

**Template:**

- Avoid inline styles; use utility classes (Bootstrap or Angular Material utilities, depending on the chosen UI kit).
- Use control flow only: `@if` / `@for` / `@switch` (never `*ngIf`, `*ngFor`, `*ngSwitch`).
- With `@if`, use the `as` microsyntax when you need the value in the block, e.g.:
  ```html
  @if (data(); as data) {
    <!-- template here -->
  }
  ```

## App structure

- **Standalone components** only; use routing and reactive forms.
- **UI:** Angular Material or custom components; Kanban board with CDK drag-drop.
- **State/API:** Use `libs/data-access` for API clients; `libs/auth` for guards and interceptors. Share types/DTOs from `libs/shared`.
- **Structure:** Feature-based; lazy-loaded routes where appropriate. Keep components presentational; data fetching in services.

## Tests

- **E2E:** Use Playwright for critical user flows (login, create project, create/move tasks, assign, comment); run in CI (see `spec-project.md`).
- **Unit:** Optional for backend services; not required for frontend unless you want to add them.
