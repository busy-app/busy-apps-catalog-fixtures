# BUSY catalog fixtures

Synthetic apps for catalog E2E. Each folder is independently buildable with Node 24 and pnpm.

The build-fails fixture intentionally fails; big-js intentionally exceeds the JavaScript package limit.

Error-case fixtures for the author's mistakes: screenshot-wrong-size (73×16 instead of 72×16), screenshot-not-png (text in a .png file) and no-lockfile (no pnpm-lock.yaml; the frozen install must fail). Everything else in them is valid and builds.
