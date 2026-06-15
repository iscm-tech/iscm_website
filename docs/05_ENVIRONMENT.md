# Environment Configuration

## Overview

This frontend project uses environment variables to configure the external API endpoint, production domain, email integration, Google integrations, and NextAuth.

The environment values are read and validated in:

- `src/config.ts`

The local environment file exists at:

- `.env`

Do not commit real secret values into documentation. This file documents variable names and purpose only.

## Required Variables

The following variables are currently used by the application.

| Variable                         | Required          | Used by                                    | Purpose                                                                                     |
| -------------------------------- | ----------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_API_PROTOCOL`       |               Yes | `src/config.ts`                            | API protocol. The current validation allows `http` or `https`.                              |
| `NEXT_PUBLIC_SERVER_DOMAIN`      |               Yes | `src/config.ts`                            | Backend/server domain setting.                                                              |
| `NEXT_PUBLIC_SERVER_PORT`        |               Yes | `src/config.ts`                            | Backend/server port setting.                                                                |
| `NEXT_PUBLIC_API_ENDPOINT`       |               Yes | `src/config.ts`, `src/lib/http.ts`         | Base URL used by the frontend HTTP client when calling the external backend API.            |
| `NEXT_PUBLIC_PRODUCTION_DOMAIN`  |               Yes | `src/config.ts`                            | Production domain setting for the deployed frontend/site.                                   |
| `NEXT_PUBLIC_EMAIL_APP_USERNAME` |               Yes | `src/config.ts`, mail-related code         | Email account username used by email integration.                                           |
| `NEXT_PUBLIC_EMAIL_APP_PASS`     |               Yes | `src/config.ts`, mail-related code         | Email account password/app password used by email integration.                              |
| `NEXT_PUBLIC_EMAIL_RECEIVER`     |               Yes | `src/config.ts`, mail-related code         | Email recipient address used by contact/email features.                                     |
| `NEXT_PUBLIC_GG_ANALYTICS_ID`    |               Yes | `src/config.ts`                            | Google Analytics tracking ID.                                                               |
| `NEXT_PUBLIC_GG_CLIENT_ID`       |               Yes | `src/config.ts`, `src/lib/nextAuthOpts.ts` | Google OAuth client ID used by NextAuth.                                                    |
| `NEXT_PUBLIC_GG_SCERET`          |               Yes | `src/config.ts`, `src/lib/nextAuthOpts.ts` | Google OAuth client secret value. The variable name is currently spelled `SCERET` in code.  |
| `NEXT_PUBLIC_NEXTAUTH_SECRET`    |               Yes | `src/config.ts`, `src/lib/nextAuthOpts.ts` | Secret value passed into NextAuth configuration.                                            |
| `NEXTAUTH_URL`                   | Runtime-dependent | NextAuth/runtime environment               | Canonical URL used by NextAuth. It is also logged in `src/config.ts` during config loading. |
| `PORT`                           | Runtime-dependent | `server.js`                                | Port used by the custom Node server. Falls back to `3000` when not set.                     |

## Example `.env` Template

Use this as a shape reference only. Replace placeholder values per environment.

```env
NEXT_PUBLIC_API_PROTOCOL=https
NEXT_PUBLIC_SERVER_DOMAIN=example.com
NEXT_PUBLIC_SERVER_PORT=443
NEXT_PUBLIC_API_ENDPOINT=https://api.example.com
NEXT_PUBLIC_PRODUCTION_DOMAIN=https://example.com

NEXT_PUBLIC_EMAIL_APP_USERNAME=your-email-username
NEXT_PUBLIC_EMAIL_APP_PASS=your-email-app-password
NEXT_PUBLIC_EMAIL_RECEIVER=receiver@example.com

NEXT_PUBLIC_GG_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GG_CLIENT_ID=your-google-client-id
NEXT_PUBLIC_GG_SCERET=your-google-client-secret

NEXTAUTH_URL=https://example.com
NEXT_PUBLIC_NEXTAUTH_SECRET=your-nextauth-secret

PORT=3000
```

## Frontend API Configuration

The shared HTTP client is implemented in:

- `src/lib/http.ts`

By default, API requests use:

```ts
envConfig.API_ENDPOINT;
```

This value comes from:

```env
NEXT_PUBLIC_API_ENDPOINT
```

Service files in `src/services/` pass relative API paths such as `api/users/login`, `/api/news`, or `/api/education/non-degree`. The HTTP client combines those paths with `NEXT_PUBLIC_API_ENDPOINT`.

## Authentication Configuration

NextAuth configuration lives in:

- `src/lib/nextAuthOpts.ts`
- `src/app/api/auth/[...nextauth]/route.ts`

The current auth setup uses Google provider configuration:

- `NEXT_PUBLIC_GG_CLIENT_ID`
- `NEXT_PUBLIC_GG_SCERET`

It also uses:

- `NEXT_PUBLIC_NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

During Google sign-in, the frontend calls the external backend login endpoint through `src/services/auth.service.ts`.

## Email Configuration

Email-related configuration is validated through `src/config.ts`:

- `NEXT_PUBLIC_EMAIL_APP_USERNAME`
- `NEXT_PUBLIC_EMAIL_APP_PASS`
- `NEXT_PUBLIC_EMAIL_RECEIVER`

These values should be treated as sensitive. Do not include real values in docs, screenshots, commits, or issue reports.

## Google Analytics Configuration

Google Analytics uses:

- `NEXT_PUBLIC_GG_ANALYTICS_ID`

The exact integration point depends on the app layout/page code, but the variable is part of the validated runtime config.

## Deployment Environment

The GitHub Actions deployment workflow is located at:

- `.github/workflows/deploy.yml`

The workflow passes these environment variables from GitHub Actions secrets during build:

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
- `NEXT_PUBLIC_NEXTAUTH_SECRET`

The workflow also uses deployment-only secrets for SSH/SCP and remote paths. Those are GitHub Actions deployment secrets, not frontend runtime variables.

Deployment-only secrets used by `.github/workflows/deploy.yml`:

| Secret      | Purpose                                                   |
| ----------- | --------------------------------------------------------- |
| `SSH_HOST`  | Hosting server address                                    |
| `SSH_USER`  | SSH username                                              |
| `SSH_KEY`   | Private SSH key used by SCP/SSH actions                   |
| `SSH_PORT`  | SSH port                                                  |
| `APP_PATH`  | Remote application path on hosting                        |
| `NODE_PATH` | Shell snippet/path sourced before remote Node.js commands |

`NEXTAUTH_URL` is not part of the `src/config.ts` Zod schema and is not passed in the workflow build step. It should still be configured in the hosting/runtime environment wherever NextAuth expects it.

## Notes

- This is a frontend repository. Backend and database environment variables should be documented in the backend repository, not here.
- The current code uses several `NEXT_PUBLIC_*` variables, which means they may be exposed to browser-side code by Next.js. Do not place private server-only secrets in `NEXT_PUBLIC_*` variables unless that exposure is intentional.
- The variable `NEXT_PUBLIC_GG_SCERET` is misspelled in the current code and environment naming. Rename it only with a coordinated code and deployment update.
- `PORT` is consumed by `server.js` and defaults to `3000`.
- No `.env.example` file is currently present. If one is added later, it should use placeholders only.
