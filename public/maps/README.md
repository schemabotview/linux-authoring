# Linux system map poster

`linux-system-map.png` is a derived 1600×1920 layout capture of the declarative
`src/scenes/system-map.ts` overview. The TypeScript scene is the source of truth.
The image provides a full-size reading alternative to the fitted overview, whose
interactive pan/zoom controls are disabled by the installed engine.

With the dev server running, regenerate and inspect the poster:

```sh
PREVIEW_URL=http://127.0.0.1:5178/linux-authoring/ node scripts/check-foundations-preview.mjs
cp scripts/out/foundations-review/system-map-poster.png public/maps/linux-system-map.png
```

Adjust the port and `CHROME_PATH` to the local environment. The check also captures
all seven focused views and verifies the existing poster URL. Commit the reviewed
poster with its source change. This is a screenshot, not a recorded video; it does
not imply audio generation, release approval, or publication.
