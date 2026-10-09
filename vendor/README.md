# Local shared-shell snapshot

`graphlearning-shell-0.10.0.tgz` was produced with `npm pack --ignore-scripts` from
`schemabotview/ui-shell` after its native concept/course-title header change.
Source commit: `schemabotview/ui-shell@003a5fa`.

The package is consumed through package.json and integrity-pinned in package-lock.json.
It contains the normal package distribution, not a second renderer maintained here.
This keeps installs portable before any registry publication. No npm publish occurred.

Source is maintained in ui-shell. Build there with `npm run build`, create a fresh
snapshot with `npm pack --ignore-scripts --pack-destination /tmp`, then copy/install
it here and verify the application. Do not patch this archive in place. Once a separately
authorized registry release is available, replace this file dependency with that exact
version and remove the archive. Do not retain both the native header and a Vite adapter.
