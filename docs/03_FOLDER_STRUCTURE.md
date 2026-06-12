# Folder Structure

## Overview

This repository is a Next.js 15 application using the App Router, TypeScript, `next-intl` for localized routes, `next-auth` for authentication, styling, and a custom Node server for production startup.

The structure below only describes folders and files that exist in this repository.

## Folder Tree

```txt
client/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .next/
├── docs/
├── messages/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── context/
│   ├── hooks/
│   ├── i18n/
│   ├── lib/
│   ├── schemaValidations/
│   ├── services/
│   ├── types/
│   ├── config.ts
│   ├── middleware.ts
│   └── types.d.ts
├── .env
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── server.js
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

## Major Folders

### `.github/`

Contains GitHub repository automation.

- `.github/workflows/deploy.yml` builds the Next.js app on pushes to `master` or manual workflow dispatch, uploads the production artifact, transfers it to shared hosting with SCP, then runs remote SSH commands to extract, install production dependencies, and restart the app.

### `docs/`

Contains project documentation files:

- `01_PROJECT_OVERVIEW.md`
- `02_ARCHITECTURE.md`
- `03_FOLDER_STRUCTURE.md`
- `04_API.md`
- `05_ENVIRONMENT.md`
- `06_DEPLOYMENT.md`
- `07_MAINTENANCE.md`
- `08_KNOWN_ISSUES.md`
- `AUDIT.md`

### `messages/`

Contains locale message catalogs used by `next-intl`.

- `en.json` stores English translations.
- `vi.json` stores Vietnamese translations.

### `public/`

Contains static assets served directly by Next.js.

- `public/assets/` includes downloadable or bundled assets such as fonts, logo archives, and PDFs.
- `public/images/` contains image assets organized by site area, including about, backgrounds, courses, event series, footer, icons, logos, partners, research, SDG icons, and studiolab assets.
- `public/js/` contains browser JavaScript files such as Bootstrap, jQuery, Popper, and move-system scripts.

### `src/`

Contains the application source code.

#### `src/app/`

Next.js App Router entry point.

- Root app files include `layout.tsx`, `loading.tsx`, `error.tsx`, `robots.ts`, `sitemap.ts`, `style.css`, and `fontDeclare.ts`.
- `src/app/admins/` contains admin-facing pages and dashboard routes.
- `src/app/[locale]/` contains localized public-facing routes for `en` and `vi`.

Important route areas inside `src/app/[locale]/`:

- `(mainpage)/` contains the main public website sections, including education, people, posts, research and development, brand identity, facilities, overview, and recruitment.
- `(center&lab)/` contains center/lab routes.
- `auth/` contains localized authentication pages.
- `homepage_views/` contains homepage view components.
- `iscmer/` contains ISCMER internal and UEH-related sections.

Important admin route areas:

- `src/app/admins/dashboard/(posts)/` contains admin management screens for post-like content such as news, events, open admission, student life, and evolving research. Some UI labels may present these categories with different public names.
- `src/app/admins/dashboard/(people)/` contains admin management screens for people-related content such as members, advisory, and network. UI labels may differ from service keys.
- `src/app/admins/dashboard/components/` contains dashboard-specific UI components, forms, tables, and editor components.
- `src/app/admins/dashboard/pending/` contains pending-content (posts are posted from UEH Portal) review/edit/accept/reject pages.

Important API route:

- `src/app/api/auth/[...nextauth]/route.ts` exposes the NextAuth handler for `GET` and `POST` requests using `src/lib/nextAuthOpts.ts`.

#### `src/assets/`

Contains local style and plugin assets.

- `src/assets/scss/` stores global SCSS partials, shared variables, mixins, typography, common styles, move-system styles, and page template styles.
- `src/assets/plugins/` stores plugin CSS assets, including Bootstrap CSS.

#### `src/components/`

Contains reusable React components used across the app.

- `src/components/ui/` contains reusable UI primitives such as buttons, dialogs, dropdowns, forms, inputs, tables, tabs, toast components, tooltips, sidebar, and related styles.
- `src/components/partials/` contains layout partials such as header, footer, and page header.
- `src/components/ContactForm/` contains the contact form component and its SCSS.
- Top-level files in `src/components/` include shared cards, pagination, search, markdown rendering, auth provider wrapping, masonry layout, post/event display components, and other common UI pieces.

#### `src/constants/`

Contains application constants.

- `src/constants/en/` contains English constants.
- `src/constants/vi/` contains Vietnamese constants.
- `src/constants/index.ts` exports shared constants.

#### `src/context/`

Contains React context providers/state modules, including admin context and rich text editor context.

#### `src/hooks/`

Contains custom React hooks, including mobile detection, toast handling, and DOM-related hooks.

#### `src/i18n/`

Contains `next-intl` configuration.

- `routing.ts` defines supported locales `en` and `vi`, with `en` as the default locale.
- `request.ts` configures locale message loading for requests.

#### `src/lib/`

Contains shared library code and framework integrations.

- `nextAuthOpts.ts` configures NextAuth with Google authentication and JWT sessions.
- `http.ts` centralizes HTTP behavior.
- `mail.ts` contains mail-related helpers.
- `cookies.ts` contains cookie helpers.
- `html2md.ts` contains HTML-to-Markdown conversion helpers.
- `utils.ts` contains shared utility functions.

#### `src/schemaValidations/`

Contains Zod validation schemas for application domains such as account, activities, auth, competition, course, member, page header, partner, post, research, and studiolab.

#### `src/services/`

Contains service modules for backend/API interactions. Existing services cover activities, auth, competition, course, member, partner, post, recruitment, research, studiolab, and image upload behavior.

#### `src/types/`

Contains shared TypeScript type declarations for language, menu, page, and NextAuth extension types.

#### `src/config.ts`

Validates runtime environment variables with Zod and exports the parsed config. It reads public API/server settings, mail settings, Google analytics/auth settings, production domain, and NextAuth secret values from environment variables.

#### `src/middleware.ts`

Configures `next-intl` middleware using `src/i18n/routing.ts`. The matcher excludes API routes, Next.js internals, Vercel internals, admin routes, and static file paths.

## Important Root Files

### `package.json`

Defines the npm project metadata, scripts, dependencies, and dev dependencies.

Available scripts:

- `npm run dev` runs `next dev --turbopack`.
- `npm run build` runs `next build`.
- `npm run start` runs `NODE_ENV=production node server.js`.
- `npm run lint` runs `next lint`.

### `package-lock.json`

Locks npm dependency versions for reproducible installs.

### `next.config.js`

Configures Next.js with the `next-intl` plugin. It allows remote images over both `https` and `http` from any hostname and places development indicators in the top-left.

### `server.js`

Custom production HTTP server. It creates a Node `http` server, prepares the Next.js app, and delegates requests to Next's request handler. The server uses `process.env.PORT` or falls back to port `3000`.

### `.env`

Local environment file. It exists in this repository, but values should be treated as secrets and not copied into documentation.

Environment variable names present:

- `NEXT_PUBLIC_API_PROTOCOL`
- `NEXT_PUBLIC_SERVER_DOMAIN`
- `NEXT_PUBLIC_SERVER_PORT`
- `NEXT_PUBLIC_API_ENDPOINT`
- `NEXT_PUBLIC_PRODUCTION_DOMAIN`
- `NEXT_PUBLIC_EMAIL_APP_USERNAME`
- `NEXT_PUBLIC_EMAIL_APP_PASS`
- `NEXT_PUBLIC_EMAIL_RECEIVER`
- `NEXT_PUBLIC_GG_ANALYTICS_ID`
- `NEXT_PUBLIC_GG_CLIENT_ID`
- `NEXT_PUBLIC_GG_SCERET`
- `NEXTAUTH_URL`
- `NEXT_PUBLIC_NEXTAUTH_SECRET`

### `.eslintrc.json`

Extends Next.js linting presets and warns on explicit `any` and unused variables.

### `postcss.config.mjs`

Configures PostCSS with `@tailwindcss/postcss` and `autoprefixer`.

### `components.json`

Configures the local UI component setup. It points aliases such as `@/components`, `@/components/ui`, `@/lib`, and `@/hooks`, uses TSX and React Server Components, and specifies the Lucide icon library.

### `tsconfig.json`

Configures TypeScript for the Next.js app. Important settings include strict mode, bundled module resolution, JSON imports, JSX preservation, incremental builds, and the `@/*` path alias mapped to `./src/*`.

### `next-env.d.ts`

Generated Next.js TypeScript environment declaration file.

### `tsconfig.tsbuildinfo`

Generated TypeScript incremental build metadata.

### `.gitattributes`

Git attributes configuration for tracking Git LFS.

### `.gitignore`

Defines ignored files and folders for Git.

## Deployment-Related Files

Deployment behavior is defined by:

- `.github/workflows/deploy.yml`
- `server.js`
- `package.json`
- `package-lock.json`
- `next.config.js`

The active workflow deploys to shared hosting with a packaged artifact, SCP, and SSH. Docker is documented as a repository file, not as the active deployment path.
