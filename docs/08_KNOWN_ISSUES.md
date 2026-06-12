# Known Issues

## 1. Shared Hosting Resource Limits

### Problem

Shared hosting may limit CPU, RAM, process count, or execution time.

### Impact

- Node.js app may crash.
- External API calls may appear slow from the frontend.
- Deployment may be incomplete if the hosting process is interrupted.

### Solution

- Build the app in GitHub Actions.
- Deploy only required production files.
- Avoid heavy background jobs in the frontend app.
- Monitor process count and memory usage through hosting tools.

---

## 2. Node.js Version Compatibility

### Problem

The project can run in different Node.js environments:

- GitHub Actions uses Node.js `20`.
- The Dockerfile uses Node.js `22.12.0-alpine`.
- cPanel Node.js version is configured outside this repository.

### Impact

- Installation warnings.
- Runtime errors.
- Build errors.
- Dependency incompatibility.

### Solution

- Match cPanel Node.js version as closely as practical with the CI/runtime requirements.
- Check package compatibility before major dependency updates.
- Verify production build after dependency changes.

---

## 3. cPanel `node_modules` Symlink Constraint

### Problem

Some cPanel environments manage `node_modules` through a virtual environment or symlink.

The active workflow currently runs:

```bash
npm ci --omit=dev
```

on the remote host after extracting the deployment artifact.

### Impact

- Node.js app may fail to start.
- Installed dependencies may be missing.
- cPanel Node.js Selector behavior may break if its managed `node_modules` path is overwritten.

### Solution

- Confirm how the hosting provider manages `node_modules`.
- Preserve hosting-managed symlinks if cPanel owns them.
- Do not change the remote install behavior without checking the hosting environment.

---

## 4. Environment Variables Missing During Build

### Problem

Next.js may require variables during build time, especially variables prefixed with `NEXT_PUBLIC_`.

The workflow passes multiple build-time values from GitHub Actions secrets.

### Impact

- Build fails in GitHub Actions.
- Production website uses undefined public variables.
- API URLs or public config values are incorrect.
- Authentication or analytics configuration may be invalid.

### Solution

- Add required variables to GitHub Actions secrets.
- Keep `05_ENVIRONMENT.md` updated when `src/config.ts` changes.
- Verify production values before deployment.

---

## 5. Authentication Works Locally but Fails on Hosting

### Problem

OAuth or authentication may work locally but fail on shared hosting because of network, DNS, SSL, callback URL, environment variable, or server time issues.

### Checklist

- Verify `NEXTAUTH_URL`.
- Verify Google OAuth callback URL.
- Verify `NEXT_PUBLIC_GG_CLIENT_ID`.
- Verify `NEXT_PUBLIC_GG_SECRET`.
- Verify `NEXT_PUBLIC_NEXTAUTH_SECRET`.
- Check SSL certificate.
- Check DNS resolution.
- Check server time synchronization.

### Possible Solution

If the server has IPv6 or DNS resolution issues, test whether forcing IPv4 DNS order helps:

```bash
NODE_OPTIONS=--dns-result-order=ipv4first node server.js
```

---

## 6. Static Assets Not Updating

### Problem

After deployment, images or static files may still show old versions.

### Possible Causes

- Browser cache.
- CDN cache.
- Hosting cache.
- Old extracted files remained on the server.
- Git LFS pointer files were deployed instead of actual files.

### Solution

- Clear browser cache.
- Clear CDN or hosting cache if applicable.
- Verify the uploaded/extracted file content over SSH or hosting file manager.
- Confirm Git LFS files are pulled in GitHub Actions.
- Confirm the deployment artifact includes `public/`.

---

## 7. Git LFS Files Missing

### Problem

Large assets tracked by Git LFS can deploy as pointer files if LFS files are not pulled before packaging.

### Impact

- Images, PDFs, archives, or other static assets may be broken.
- Public pages may load missing or invalid assets.

### Solution

- Keep the workflow steps:

```bash
git lfs install
git lfs pull
```

- Verify LFS asset content in the generated artifact.

---

## 8. Deployment Does Not Update Production

### Problem

GitHub Actions succeeds but the website still shows old content.

### Possible Causes

- Wrong `APP_PATH`.
- Wrong domain root.
- Cache issue.
- Node.js app was not restarted.
- Artifact extraction failed.
- Remote cleanup did not remove old files.
- `tmp/restart.txt` did not trigger the expected hosting restart.

### Solution

- Verify `APP_PATH`.
- Check cPanel app root.
- Check uploaded files through File Manager or SSH.
- Confirm `deploy.tar.gz` was extracted.
- Confirm old `.next`, `public`, and `messages` folders were replaced.
- Restart the Node.js app.
- Clear caches.

---

## 9. Build Output Missing

### Problem

Deployment fails because `.next` or required build files do not exist.

### Possible Causes

- `npm run build` failed.
- Wrong working directory.
- Build command was skipped.
- Build artifacts were removed before packaging.

### Solution

- Check GitHub Actions build logs.
- Confirm `npm run build` runs before artifact upload.
- Confirm `.next` exists after build.
- Confirm artifact includes `.next`, `public`, `messages`, `server.js`, package files, and `next.config.js`.

---

## 10. Production Environment Differs From Local

### Problem

The app works locally but fails in production.

### Possible Causes

- Different Node.js version.
- Different environment variables.
- Different network permissions.
- Different file paths.
- Case-sensitive file system.
- Missing production dependencies.

### Solution

- Match Node.js versions where possible.
- Compare local and production environment variable names.
- Check server logs.
- Use absolute paths carefully.
- Test production build locally with:

```bash
npm run build
npm run start
```

---

## 11. Public Environment Variable Exposure

### Problem

Several values are named with the `NEXT_PUBLIC_` prefix.

### Impact

Next.js may expose `NEXT_PUBLIC_*` variables to browser-side code. Values intended to remain server-only should not use this prefix unless the exposure is intentional.

### Solution

- Review which values truly need to be public.
- Treat current values as potentially visible to the browser.
- Coordinate any rename with source and deployment config.

---

## 12. No Test Script Confirmed

### Problem

`package.json` does not define a `test` script.

### Impact

- `npm test` should not be used as a documented maintenance/deployment step.
- Automated test expectations are unclear.

### Solution

- Use `npm run build` and `npm run lint` as the currently confirmed checks.
- Add a test script only when a real test setup exists.

---

## 13. Windows Shell Start Command Limitation

### Problem

The `start` script uses Unix-style environment variable assignment:

```bash
NODE_ENV=production node server.js
```

### Impact

This may not run directly in Windows shells.

### Solution

- Use the deployment Linux environment for production startup.
- On Windows, run an equivalent command through a compatible shell or set `NODE_ENV` separately before running `node server.js`.
