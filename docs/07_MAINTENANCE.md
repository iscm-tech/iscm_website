# Maintenance Guide

## 1. Overview

This document describes regular maintenance tasks for the frontend Next.js website deployed on shared hosting/cPanel.

This repository does not own backend or database implementation. Backend API, database, and infrastructure maintenance should be documented in the backend or hosting documentation.

## 2. Regular Maintenance Tasks

| Frequency | Task                                  |
| --------- | ------------------------------------- |
| Daily     | Check website availability            |
| Daily     | Check critical public and admin pages |
| Weekly    | Review GitHub Actions deployment logs |
| Weekly    | Review cPanel Node.js logs            |
| Weekly    | Check frontend/API integration errors |
| Monthly   | Review dependency updates             |
| Monthly   | Check static asset sizes              |
| Monthly   | Check SEO and indexing status         |
| Monthly   | Check website performance             |

## 3. Logs to Check

| Source                    | Purpose                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- |
| GitHub Actions logs       | Deployment, build, artifact, SCP, and SSH issues                             |
| cPanel Node.js logs       | Runtime errors from the hosted Node.js app                                   |
| Browser console           | Client-side JavaScript, asset, and API integration errors                    |
| External backend/API logs | Backend-side failures, if access is available in the external backend system |

Do not document backend logs or database logs as owned by this repository.

## 4. Dependency Maintenance

Recommended process:

```bash
npm outdated
npm update
npm run lint
npm run build
```

There is no confirmed `npm test` script in `package.json`.

Rules:

- Do not update major versions directly in production.
- Test dependency updates locally first.
- Check Node.js compatibility before updating.
- Review breaking changes from important packages.
- Keep `package-lock.json` committed because this project uses npm.

## 5. Build and Runtime Checks

Use:

```bash
npm run build
```

to verify the production build.

Use:

```bash
npm run lint
```

to run the configured lint command.

Production startup is handled by:

```bash
npm run start
```

which runs:

```bash
NODE_ENV=production node server.js
```

## 6. Deployment Maintenance

Review `.github/workflows/deploy.yml` whenever deployment behavior changes.

Important workflow areas to maintain:

- Git LFS checkout and pull.
- Build-time environment variables.
- Artifact contents.
- `messages/` folder inclusion.
- `deploy.tar.gz` packaging.
- SCP upload.
- SSH extraction.
- Remote cleanup commands.
- `npm ci --omit=dev`.
- Restart behavior with process kill and `tmp/restart.txt`.
- `NODE_PATH` usage.

## 7. cPanel Node Modules Constraint

Some shared-hosting/cPanel environments manage `node_modules` through a Node.js Selector virtual environment or symlink.

Before changing the remote dependency install step, verify how the hosting provider manages `node_modules`. The current workflow runs:

```bash
npm ci --omit=dev
```

on the remote host.

If cPanel owns `node_modules` as a symlink, overwriting it can break the hosted app.

## 8. Performance Maintenance

Regularly check:

- Page load speed.
- Image sizes.
- Static asset sizes.
- External API response impact on frontend pages.
- Server memory usage through hosting tools.
- Server CPU usage through hosting tools.
- Lighthouse score.
- Core Web Vitals.

Database query speed is an external backend responsibility and should not be maintained from this frontend repo.

## 9. SEO Maintenance

Regularly verify:

- Page titles.
- Meta descriptions.
- Open Graph tags.
- Sitemap route.
- Robots route.
- Canonical URLs, if used.
- Google Analytics setup.
- Search Console status, if configured outside the repo.

## 10. Documentation Maintenance

Update documentation when:

- `src/app/` routes change.
- `src/services/` API integration changes.
- `src/config.ts` environment variables change.
- `.github/workflows/deploy.yml` changes.
- `server.js` runtime behavior changes.
- Static asset organization changes.
- New production issues are discovered.

Suggested mapping:

| Source change                | Docs to update                                 |
| ---------------------------- | ---------------------------------------------- |
| Public/admin route changes   | `02_ARCHITECTURE.md`, `03_FOLDER_STRUCTURE.md` |
| Service endpoint changes     | `04_API.md`                                    |
| Environment variable changes | `05_ENVIRONMENT.md`                            |
| Workflow/deployment changes  | `06_DEPLOYMENT.md`, `08_KNOWN_ISSUES.md`       |
| Operational issue found      | `08_KNOWN_ISSUES.md`                           |

## 11. Generated Files

Do not manually maintain generated folders/files as source:

- `.next/`
- `node_modules/`
- `tsconfig.tsbuildinfo`

## 12. Incident Handling

When a production issue occurs:

1. Identify the affected page or workflow.
2. Check GitHub Actions deployment logs.
3. Check cPanel Node.js logs.
4. Check recent commits.
5. Check environment variables.
6. Check external backend/API availability if the issue involves data.
7. Re-run or revert deployment if needed.
8. Document confirmed issues in `08_KNOWN_ISSUES.md`.
