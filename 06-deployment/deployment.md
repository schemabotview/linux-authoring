# Deployment workflow

- Version: 1.0
- Date: 2026-10-09
- Intended destinations: GitHub Pages for the website; YouTube for videos

## Production versus publication

Implementation produces the website build, narration WAV files, and recorded video assets. Deployment publishes reviewed artifacts and verifies their public links. Audio generation and video recording are documented in `04-implementation/implementation.md`.

## Website: GitHub Pages

GitHub Pages is the selected hosting destination. The Linux app is configured for the `/linux-authoring/` repository base path. Build and publish the app's `dist` output through the configured Pages workflow; a push of source files alone does not establish a working website deployment.

For linux-authoring, the Pages API check on 2026-10-09 returned HTTP 404, and no repository `.github` directory was present locally. Pages is therefore **not verified as enabled**. Configure/verify the Pages build and publishing workflow before treating website deployment as operational. No Pages configuration was changed as part of writing this document.

After a reviewed release is published, check the catalog, direct section links, assets, audio paths, and mobile navigation at the actual public URL. Record the source revision and website URL. Do not claim publication based on a successful local build.

## Videos: Codex → YouTube integration

The intended workflow is to upload the reviewed implementation-generated videos using a connected Codex YouTube integration. Confirm the target channel, video assets, titles, descriptions, chapters, thumbnails, captions when available, and intended visibility before upload. Use the approved course order and preserve course/section references.

No callable YouTube connector was available in the session when this document was created. Connection and upload capability remain pending verification; no upload has occurred. Once connected and authorized, use the integration's actual supported operations rather than assuming it supports every metadata or caption feature.

Record returned video IDs/URLs and visibility. Verify playback and update corresponding website links. Uploading a file and making it publicly visible are separate states; record the actual state. Keep any credentials out of the public repository.

## Release record

For each release, record source commit, user review status, website URL, course video URLs, actual publication dates, known issues, and any correction or rollback. If the website or video changes, update the record and recheck affected links.

There is no deployment AI prompt in this folder. This document records the publishing procedure and actual setup status.
