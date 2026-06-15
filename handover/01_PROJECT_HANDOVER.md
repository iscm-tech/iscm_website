# ISCM Website Project Handover

## 1. Document Information

| Item                | Value                                                            |
| ------------------- | ---------------------------------------------------------------- |
| Project             | ISCM Website                                                     |
| Document type       | Project handover                                                 |
| Handover date       | June 15, 2026                                                    |
| Prepared by         | Minh Khoi - Technical Team                                       |
| Production domain   | iscm.ueh.edu.vn                                                  |
| Login URL           | [iscm.ueh.edu.vn/auth/login](https://iscm.ueh.edu.vn/auth/login) |
| Internal portal URL | [iscm.ueh.edu.vn/iscmer](https://iscm.ueh.edu.vn/iscmer)         |
| Admin URL           | [iscm.ueh.edu.vn/admins](https://iscm.ueh.edu.vn/admins)         |

## 2. Project Summary

The ISCM Website is a frontend/client application built with Next.js and TypeScript. It provides:

- a public institutional website;
- a login-protected internal portal for ISCM members; and
- a login-protected Admin CMS for content administrators and editors.

The frontend consumes an external backend API. Backend services, database implementation, backend credentials, and backend operations are external responsibilities and are not delivered as part of this repository.

The active production deployment uses GitHub Actions, a tar build artifact, SCP, SSH, and shared hosting/cPanel.

## 3. Public Website Scope

The public website does not require login and provides general information for public visitors, including:

- introduction and overview pages;
- education programs;
- research and competition content;
- iscm_life, events, student life, expert insights, and admission information;
- facilities and studiolab information;
- people, team, advisory, and network information; and
- recruitment and other general website content.

Previously, the website included a general news section. In the current structure, this content direction has been separated into more specific sections such as iscm_life and student_life. The existing news section or route is still retained for backward compatibility, so previously published links remain accessible and do not result in broken URLs.

No separate public website user guide is delivered because the public interface is intended to be self-explanatory through visible navigation, page content, and links.

## 4. Handover Scope

This handover covers:

- frontend source code and technical documentation;
- production deployment workflow;
- environment-variable and secret ownership;
- shared-hosting operational responsibilities;
- internal portal usage guidance;
- Admin CMS usage guidance;
- known operational limitations; and
- acceptance responsibilities for the receiving team.

This handover does not include:

- backend source code;
- database schema, migrations, or database administration;
- external API infrastructure;
- third-party account ownership unless explicitly transferred;
- production credentials or secret values; or
- hosting-provider contractual support.

## 5. Delivered Items

| Delivered item                      | Location/status                             |
| ----------------------------------- | ------------------------------------------- |
| Frontend source code                | Repository root                             |
| Technical documentation             | `docs/`                                     |
| Project handover                    | `handover/01_PROJECT_HANDOVER.md`           |
| Internal portal user guide          | `handover/02_INTERNAL_PORTAL_USER_GUIDE.md` |
| Admin CMS user guide                | `handover/03_ADMIN_CMS_USER_GUIDE.md`       |
| Deployment workflow                 | `.github/workflows/deploy.yml`              |
| Environment configuration reference | `docs/05_ENVIRONMENT.md`                    |
| Deployment reference                | `docs/06_DEPLOYMENT.md`                     |
| Maintenance reference               | `docs/07_MAINTENANCE.md`                    |
| Known issues reference              | `docs/08_KNOWN_ISSUES.md`                   |

## 6. System Overview

| Area                     | Access         | Main purpose                                                                    |
| ------------------------ | -------------- | ------------------------------------------------------------------------------- |
| Public website           | No login       | Public institutional information and content                                    |
| Internal portal / ISCMer | Login required | Internal information, links, regulations, resources, and onboarding information |
| Admin CMS                | Admin login    | Manage posts, people information, pending portal content                        |

The application supports English and Vietnamese localized routes. Authentication is integrated through NextAuth and an external backend authentication service.

## 7. Access and Ownership

This document does not include real credentials, passwords, tokens, private keys, or secret values.

All account information, access credentials, deployment keys, and sensitive configuration values are stored separately in a restricted-access Google Docs file. Access to that file is limited to authorized project owners, administrators, and maintainers only. The credential document link is not created yet and should be added before final handover.

During handover, the receiving party should confirm that they have been granted the appropriate access to the restricted credential document and that the listed account owners are correct.

| Access area                     | Account/owner                                                          | Handover action                                                                                                                          |
| ------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub repository               | `bonhodungchung` email / `iscm_website` repository                     | Confirm repository access, role, and admin/write permissions for the receiving team.                                                     |
| GitHub Actions secrets          | Stored in the restricted credential document / attached handover files | Confirm that required GitHub Actions secrets are documented and transferred without exposing secret values in this handover document.    |
| cPanel/shared hosting           | UEH shared hosting account                                             | Confirm hosting portal access, application ownership, app root, Node.js configuration, and file/SSH access.                              |
| SSH deployment access           | UEH shared hosting account / deployment SSH key                        | Confirm that the deployment SSH key is authorized and that GitHub Actions can connect to the hosting server.                             |
| Production domain/DNS           | UEH domain/DNS owner                                                   | Confirm the production domain routing, DNS management process, SSL status, and hosting portal link/contact point for future DNS updates. |
| Google OAuth configuration      | `bonhodungchung` email / ISCM Google Console account                   | Confirm OAuth client ownership, authorized redirect URIs, callback URLs, and account access.                                             |
| Google Analytics                | `[To be confirmed]`                                                    | Analytics ownership is not confirmed yet. Confirm the property owner, access permission, and tracking ID before final handover.          |
| External backend API            | `bonhodungchung` email / `iscm_website_server` repository              | Confirm access to the separated backend/API repository. The same technical owner/team currently maintains both frontend and API sources. |
| Internal portal access approval | Technical Team                                                         | Confirm the process for approving, granting, updating, and revoking internal portal access.                                              |
| Admin CMS accounts              | IT / Website administrator `[To be assigned]`                          | Confirm the admin/editor account owner. New admin accounts must be created by an existing authenticated admin account/token.             |

## 8. Deployment Summary

The website is deployed through a GitHub Actions workflow to the shared hosting/cPanel environment.

At a high level, the deployment process is:

1. Build the Next.js application in GitHub Actions.
2. Package the required production files into a deployment archive.
3. Upload the archive to shared hosting through SCP.
4. Use SSH to extract the archive, install production dependencies, and restart the hosted Node.js application.

Operational details, required secrets, artifact contents, restart commands, and hosting-specific cautions are maintained in `docs/06_DEPLOYMENT.md`.

Docker-related files may exist in the repository, but Docker is not the active production deployment method.

## 9. Environment and Secrets Summary

Environment configuration is documented in `docs/05_ENVIRONMENT.md`.

The receiving owner must confirm:

- API endpoint configuration;
- production-domain configuration;
- email integration configuration;
- Google Analytics configuration;
- Google OAuth configuration;
- NextAuth configuration;
- cPanel runtime environment;
- SSH/SCP deployment secrets;
- remote application path; and
- Node.js path/runtime setup.

Secret values must remain in approved secret stores such as GitHub Actions secrets or the hosting environment. Do not place secret values in this handover, source code comments, screenshots, or exported documents.

## 10. Operation Guide

### Routine checks

- Confirm the public website loads.
- Confirm English and Vietnamese routes load.
- Confirm the internal portal login works.
- Confirm an authorized internal user can access protected content.
- Confirm the Admin CMS login works.
- Confirm administrators can load content lists and pending items.
- Review GitHub Actions logs after deployment.
- Review cPanel Node.js logs when runtime errors occur.
- Check external backend API availability when content does not load.

### Deployment operation

- Use the documented GitHub Actions workflow.
- Do not manually upload partial build files unless performing an approved recovery.
- Confirm Git LFS assets are present.
- Confirm `messages/` is included in the artifact.
- Treat remote dependency installation as hosting-sensitive because cPanel may manage `node_modules` through a symlink or virtual environment.

### Incident response

1. Identify whether the issue affects public pages, internal portal, Admin CMS, deployment, or the external backend.
2. Review recent commits and GitHub Actions logs.
3. Review cPanel Node.js logs.
4. Verify environment-variable names and external API availability.
5. Revert and redeploy if the latest frontend change caused the issue.
6. Escalate backend or database issues to the external backend owner.
7. Record confirmed operational issues in `docs/08_KNOWN_ISSUES.md`.

## 11. User Documentation Delivered

| Audience               | Document                                                               |
| ---------------------- | ---------------------------------------------------------------------- |
| Internal users         | `handover/02_INTERNAL_PORTAL_USER_GUIDE.md`                            |
| Administrators/editors | `handover/03_ADMIN_CMS_USER_GUIDE.md`                                  |
| Public visitors        | No separate guide; public website scope is summarized in this document |

## 12. Maintenance Responsibility

| Responsibility                    | Assigned owner                                                                   |
| --------------------------------- | -------------------------------------------------------------------------------- |
| Frontend source maintenance       | Technical Team                                                                   |
| Content administration            | Website administrator / Content owner                                            |
| Internal portal content ownership | Technical Team and assigned internal content owners                              |
| GitHub Actions maintenance        | Technical Team                                                                   |
| cPanel/shared-hosting operation   | UEH shared hosting owner / Technical Team                                        |
| Domain and SSL maintenance        | UEH domain/DNS owner                                                             |
| Google OAuth ownership            | `bonhodungchung` email / ISCM Google Console account                             |
| Google Analytics ownership        | `[To be confirmed]`                                                              |
| External backend/API support      | Technical Team / `bonhodungchung` email / `iscm_website_server` repository owner |
| Database operation                | External backend/API owner / Technical Team, as applicable                       |
| User access approval              | Technical Team                                                                   |

Maintenance procedures are documented in `docs/07_MAINTENANCE.md`.

## 13. Known Limitations and Operational Cautions

- Shared hosting may impose CPU, memory, process, or execution-time limits.
- The cPanel environment may manage `node_modules` through a symlink or virtual environment.
- Build-time configuration depends on GitHub Actions secrets.
- Git LFS assets must be pulled before packaging.
- Backend APIs and database operations are external dependencies.
- Several environment values use the `NEXT_PUBLIC_` prefix and may be exposed to browser-side code.
- The project does not currently define a test script.
- The production start script uses Unix-style environment-variable assignment.
- Hosting-specific Node.js, SSL, domain, and restart behavior must be verified in cPanel.

See `docs/08_KNOWN_ISSUES.md` for details.

## 14. Acceptance Checklist

| Acceptance item                        | Status               |
| -------------------------------------- | -------------------- |
| Repository access transferred          | Pending confirmation |
| GitHub Actions access confirmed        | Pending confirmation |
| Deployment secrets ownership confirmed | Pending confirmation |
| cPanel access transferred              | Pending confirmation |
| SSH deployment access confirmed        | Pending confirmation |
| Domain and SSL ownership confirmed     | Pending confirmation |
| Google OAuth ownership confirmed       | Pending confirmation |
| Google Analytics ownership confirmed   | Pending confirmation |
| External backend owner identified      | Pending confirmation |
| Production deployment tested           | Pending confirmation |
| Internal portal login tested           | Pending confirmation |
| Admin CMS login tested                 | Pending confirmation |
| Pending content workflow tested        | Pending confirmation |
| User guides reviewed                   | Pending confirmation |
| Open issues accepted                   | Pending confirmation |

## 15. Handover Notes

All real credentials, passwords, tokens, private keys, deployment keys, and sensitive configuration values are stored separately in a restricted-access Google Docs file. This handover document records ownership, access areas, and operational responsibilities only.

Before final Word/PDF export, confirm the following remaining items:

| Item                                       | Status                   | Notes                                                                                                                                |
| ------------------------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Restricted credential document link/access | Pending confirmation     | A restricted Google Docs credential file will be created later. Confirm that only authorized receivers have access.                  |
| Google Analytics ownership                 | Pending confirmation     | Analytics owner/property is not confirmed yet. Fill this after the responsible account is identified.                                |
| Support email                              | Pending confirmation     | The current technical contact may change after handover. Fill the final support email after the responsible person/team is assigned. |
| Support channel                            | Temporary                | Use the ISCM PR Community group temporarily until a dedicated technical support channel is created.                                  |
| Production website URL                     | Confirmed                | `https://iscm.ueh.edu.vn`                                                                                                            |
| Internal portal URL                        | Confirmed                | `https://iscm.ueh.edu.vn/iscmer`                                                                                                     |
| Admin CMS URL                              | Confirmed                | `https://iscm.ueh.edu.vn/admins`                                                                                                     |
| External backend/API support contact       | Confirmed with note      | The frontend and external API repositories are separated, but currently maintained by the same technical owner/team.                 |
| Admin CMS account management process       | Pending owner assignment | IT / Website administrator should own this process. New admin accounts require an existing authenticated admin account/token.        |

Recommended screenshots for the final exported handover package:

- Public website homepage.
- Internal portal landing page.
- Admin CMS dashboard.
- Successful GitHub Actions deployment run.
- cPanel Node.js application configuration, with sensitive values hidden.

## 16. Appendix: Related Technical Documents

- `docs/01_PROJECT_OVERVIEW.md`
- `docs/02_ARCHITECTURE.md`
- `docs/03_FOLDER_STRUCTURE.md`
- `docs/04_API.md`
- `docs/05_ENVIRONMENT.md`
- `docs/06_DEPLOYMENT.md`
- `docs/07_MAINTENANCE.md`
- `docs/08_KNOWN_ISSUES.md`
