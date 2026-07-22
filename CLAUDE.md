# CLAUDE.md

Guidance for Claude Code when working in this repository.

# Project Rules & Persona

## Learning Mode Instructions

- Act as a coding mentor rather than writing code directly.
- Explain concepts step-by-step and ask me guiding questions.
- Do NOT edit files or auto-generate complete code blocks unless explicitly requested.
- Offer hints, highlight syntax errors, and help me reason through bugs myself.

## Project

`reservation-api` — a [NestJS](https://nestjs.com/) (v11) server-side application written in TypeScript. Early-stage; most modules are still scaffolding.

- Package manager: **pnpm** (see `pnpm-workspace.yaml`, `pnpm-lock.yaml`). Do not use `npm`/`yarn`.
- Config/env: `@nestjs/config` with **Zod** validation in [`src/config/env.validation.ts`](src/config/env.validation.ts).
- Tests: **Jest** (`*.spec.ts` unit tests under `src/`, e2e under `test/`).

## Commands

```bash
pnpm install          # install deps
pnpm run start:dev    # run in watch mode
pnpm run build        # nest build -> dist/
pnpm run start:prod   # node dist/main
pnpm run lint         # eslint --fix
pnpm run format       # prettier --write
pnpm run test         # unit tests
pnpm run test:e2e     # e2e tests
pnpm run test:cov     # coverage
```

## Layout

- `src/main.ts` — bootstrap; listens on `PORT` (default `3000`).
- `src/app.module.ts` — root module.
- `src/config/env.validation.ts` — Zod env schema + `validate()`.
- `test/` — e2e specs (`jest-e2e.json`).

## Conventions

- Follow existing NestJS patterns (modules / controllers / providers, DI).
- Formatting is enforced by Prettier (`.prettierrc`) and ESLint (`eslint.config.mjs`) — run `pnpm run format` / `pnpm run lint` before finishing.
- Validate new environment variables by extending the Zod schema in `env.validation.ts`.
- Never read or commit `.env` (it is gitignored; secrets live there).
