# Angular Web Conventions

Code must be implemented in Angular. Use standalone components only; do not generate NgModules. Do not set `standalone: true` in decorators (it is the default in Angular v20+). Use comments sparingly and only for complex parts. Ensure code is complete and runnable.

---

## TypeScript

- Use strict type checking.
- Prefer type inference when the type is obvious.
- Avoid the `any` type; use `unknown` when the type is uncertain.

---

## Root App component (shell only)

For the root shell in `apps/web/src/app/` only:

- Component class must be named `App`.
- Selector must be `'app-root'` in the `@Component` decorator.
- Put the template in a separate HTML file and link it in `templateUrl`.
- Put styles in a separate CSS file and link them in `styleUrl`.

For all other screens and features: use **feature-based structure**, one component per file; do not put everything in the root App class.

---

## Components

- Keep components small and focused on a single responsibility.
- Use `input()` and `output()` functions instead of `@Input()` / `@Output()` decorators.
- Use `computed()` for derived state.
- Do not set `changeDetection` in the `@Component` decorator (default is `ChangeDetectionStrategy.OnPush`).
- Prefer inline templates for small components; use external HTML/CSS for larger ones. When using external template or style files, use paths **relative to the component TS file**.
- Use the `host` object in `@Component` or `@Directive` for host bindings; do not use `@HostBinding` or `@HostListener`.
- Use `NgOptimizedImage` for all static images (not for inline base64).
- Inject dependencies with `inject()`; never use constructor parameters.
- Prefer reactive forms over template-driven ones. Do **not** use `ngModel`.

---

## State

- Use signals for local component state and `computed()` for derived state.
- Do **not** use `mutate()` on signals; use `update()` or `set()` instead.
- Prefer creating signal state from an `Observable` with `toSignal()`; avoid calling `.set()` inside a `subscribe` block.
- Keep state transformations pure and predictable.

---

## Templates

- Use native control flow: `@if`, `@for`, `@switch` (never `*ngIf`, `*ngFor`, `*ngSwitch`).
- With `@if`, use the `as` microsyntax when you need the value in the block, e.g. `@if (data(); as data) { ... }`.
- Use the async pipe to handle observables.
- Keep templates simple; avoid complex logic.
- Do **not** use `ngClass`; use class bindings. Do **not** use `ngStyle`; use style bindings.
- For formatting, use built-in pipes (e.g. `currency`, `number`, `date`) or custom pure pipes; do not add pure formatting methods to components.
- Do not assume globals (e.g. `new Date()`) are available in templates. Do not write arrow functions or regular expressions in templates (they are not supported).

---

## Styling

- Use **Tailwind CSS** for utility-first styling.
- Avoid inline styles; use Tailwind utility classes (or Angular Material where used for components).

---

## Services

- Design services around a single responsibility.
- Use `@Injectable({ providedIn: 'root' })` (or a different scope only when the service is feature-scoped).
- File suffix: `.service.ts`; name suffix: `Service`.
- Always use `inject()`; never use constructor parameters for dependency injection.
- When the app uses `HttpClient`, ensure `provideHttpClient()` is included in the application config (e.g. `bootstrapApplication` providers).
- Name methods like repository operations where applicable: `getOne`, `getAll`, `addOne`, `removeOne`, `updateOne`.

---

## Model

- File suffix: `.model.ts`; name suffix: `Model`.
- All properties must be `readonly` and explicitly typed.
- No methods (data shape only). Prefer types/models from `libs/shared` where applicable.

---

## Nx / app structure (this project)

- **Standalone components** only; use routing and reactive forms.
- **Structure:** Feature-based; lazy-loaded routes where appropriate. One component per file for feature screens; keep components presentational; data fetching in services.
- **UI:** Tailwind for utilities; Angular Material or custom components as needed; Kanban board with CDK drag-drop.
- **State/API:** Use `libs/data-access` for API client services; `libs/auth` for guards and interceptors. Share types/DTOs from `libs/shared`.

Do not generate `bootstrapApplication` calls in rule examples; the app already bootstraps in `main.ts`.

---

## Tests

- **E2E:** Use Playwright for critical user flows (login, create project, create/move tasks, assign, comment); run in CI (see `spec-project.md`).
- **Unit:** Optional for backend; not required for frontend unless you add them.
