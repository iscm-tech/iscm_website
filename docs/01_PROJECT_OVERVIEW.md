# Project Overview

## 1. Project Information

| Item               | Description                             |
| ------------------ | --------------------------------------- |
| Project name       | `ISCM Website`                          |
| Source version     | `0.1.0`                                 |
| Project type       | Frontend website                        |
| Framework          | Next.js                                 |
| Language           | TypeScript                              |
| Deployment target  | Shared hosting / cPanel                 |
| Deployment method  | GitHub Actions + tar artifact + SCP/SSH |
| Runtime            | Node.js                                 |
| CI build Node.js   | `20`                                    |
| Production Node.js | Configured externally in cPanel         |

## 2. Project Description

This project is a frontend web application built with **Next.js** and deployed to a **shared hosting/cPanel environment** using **GitHub Actions**, a packaged build artifact, **SCP**, and **SSH**.

The website provides a maintainable, production-ready frontend platform with localized routes, reusable components, SEO-friendly pages, static assets, authentication integration, and external backend API integration.

Backend APIs and database implementation are external responsibilities. This repository consumes backend data through frontend service modules in `src/services/`.

## 3. Main Objectives

- Build a modern and maintainable website.
- Support localized public pages for English and Vietnamese content.
- Support admin-facing content management workflows.
- Reuse shared UI components across pages.
- Integrate with an external backend API.
- Improve SEO, performance, and accessibility.
- Automate deployment from GitHub to shared hosting.
- Keep the production setup compatible with cPanel limitations.

## 4. Target Users

| User group       | Purpose                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------- |
| Public visitors  | View website content and information                                                      |
| Internal members | View internal summary content and information                                             |
| Developers       | Maintain source code and deployment flow. Monitor website operation and production issues |
| Administrators   | In charge of managing content, information, posts... published on website                 |

## 5. Tech Stack

| Layer                      | Technology                                                                              |
| -------------------------- | --------------------------------------------------------------------------------------- |
| Frontend                   | Next.js, TypeScript                                                                     |
| Internationalization       | `next-intl`                                                                             |
| Styling                    | CSS, SCSS, Tailwind CSS, Bootstrap assets, shadcn/Radix-style UI components, Ant Design |
| Authentication integration | NextAuth, Google provider, external backend login                                       |
| API integration            | Frontend service modules call an external backend API                                   |
| Data/schema validation     | Zod                                                                                     |
| Deployment                 | GitHub Actions, tar artifact, SCP, SSH                                                  |
| Hosting                    | Shared hosting / cPanel                                                                 |
| Package manager            | npm                                                                                     |

## 6. Repository Information

| Item                | Value                                            |
| ------------------- | ------------------------------------------------ |
| Repository URL      | `https://github.com/iscm-tech/iscm_website.git`  |
| Main branch         | `master`                                         |
| Production domain   | Configured through deployment/environment values |
| Staging domain      | `Not currently configured`                       |
| Deployment workflow | `.github/workflows/deploy.yml`                   |

## 7. Repository Boundary

This repository contains the frontend/client application.

It does not contain:

- backend controllers
- backend business services
- database schema
- database migrations
- ORM models
- authoritative backend API contracts

Those concerns should be documented in the backend repository or backend deployment documentation.

## 8. Node.js Versions

| Environment                     | Node.js version | Source                                                           |
| ------------------------------- | --------------- | ---------------------------------------------------------------- |
| GitHub Actions build            | `20`            | `.github/workflows/deploy.yml`                                   |
| Shared hosting / cPanel runtime | `20`            | Configured in the hosting environment                            |
| TypeScript Node typings         | `^20`           | `@types/node` in `package.json`; this is not the runtime version |

The production cPanel Node.js version should be checked in the hosting configuration and kept compatible with the build output and project dependencies.

## 9. Source and Framework Versions

The versions below are declared in `package.json`. A leading `^` means npm may install a newer compatible minor or patch release within the same major version.

| Package/component  | Declared version |
| ------------------ | ---------------- |
| Application source | `1.0.0`          |
| Next.js            | `^15.0.7`        |
| React              | `^18.3.1`        |
| TypeScript         | `^5`             |
| `next-intl`        | `^3.25.3`        |
| `next-auth`        | `^4.24.13`       |
| Zod                | `^3.24.1`        |
| Sass               | `^1.81.0`        |
| Tailwind CSS       | `^4.2.2`         |
| Ant Design         | `^6.3.5`         |
| shadcn CLI/package | `^4.3.0`         |

`package-lock.json` is the source of truth for the exact installed dependency versions used by a locked npm install.

## 10. Related Documentation

- [Architecture](./02_ARCHITECTURE.md)
- [Folder Structure](./03_FOLDER_STRUCTURE.md)
- [API Integration](./04_API.md)
- [Environment Variables](./05_ENVIRONMENT.md)
- [Deployment Guide](./06_DEPLOYMENT.md)
- [Maintenance Guide](./07_MAINTENANCE.md)
- [Known Issues](./08_KNOWN_ISSUES.md)
