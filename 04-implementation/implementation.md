# Implementation and authoring workflow

- Version: 1.0
- Date: 2026-10-09
- Status: Scaffold implemented and checked; course content not authored
- Inputs: course plan v0.3; adopted design v1.0; SQL application structure

## Completed setup

The Workspace contains sibling clones of ui-shell and ui-flow and a separate linux-authoring repository. The Linux app adapts SQL's React/TypeScript/Vite integration while preserving the seven authoring-stage folders. SQL-specific sections, scenes, narration audio, and notebooks were not copied.

Seven courses and 50 sections use descriptive names, following SQL. Course directories include `foundations`, `files-and-shell`, and `scripting`; section files use title-based slugs such as `understanding-linux.ts`. Scene IDs combine course and section names. Foundations is authored; subsequent courses remain scaffolds. The 2026-10-09 naming migration supersedes the initial numbered-ID convention; historical records map through `curriculum-name-migration.json`.

## Repository structure

| Path | Responsibility |
|---|---|
| src/main.tsx | ConceptApp integration and stylesheet import order |
| src/content/types.ts | Alias of shared Course and Section types |
| src/content/<course>/<section>.ts | Section title, scene reference, slide, and narration |
| src/content/<course>/index.ts | Ordered sections within one course |
| src/content/index.ts | Course registry in learning-path order |
| src/scenes/<course>/<section>.ts | Declarative section scene |
| src/scenes/index.ts | Global scene lookup |
| src/theme.css | Subject brand tokens |
| scripts/course-manifest.json | Plan coverage, source IDs, descriptions, and references; scaffold baseline |
| scripts/concept.json and titles.json | Subject publishing identity and course titles |
| public/audio/ | Future WAV assets by course and section |
| 04-implementation/authoring-progress.md | Course/section authoring status and review evidence |

Current source of truth for rendered content is the typed section and scene files. No Markdown-to-TypeScript generator exists yet. If one is added later, explicitly migrate the source-of-truth contract instead of maintaining competing manually edited copies.

## Dependencies and configuration

The app pins published @graphlearning/flow 1.2.0 and @graphlearning/shell 0.8.0. The repo-local course-header adapter and wrapping stylesheet are restored after the user requested reverting shared-shell header changes. No local 0.10.0 archive remains. package-lock.json captures installed dependencies; use npm ci to reproduce them.

The development port is 5177. The production base is /linux-authoring/, for the intended repository GitHub Pages path. Deployment has not been configured or performed. Change base and publishing identity together if the deployment target changes.

## Commands

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
node scripts/check-content.mjs --release
```

The release guard intentionally fails while section placeholders or empty narration remain. It is a preliminary readiness check, not complete technical, visual, audio, or accessibility QA.

Existing shared commands expose recording, reels, screenshots, thumbnails, audio manifests, and video descriptions. They require reviewed content and appropriate browser/media prerequisites. Puppeteer's automatic browser download was skipped during setup; the smoke check used installed Google Chrome. Install/configure a compatible recording browser before using capture tooling.

## Authoring one course, section by section

Use ai-prompt.md with a course ID or section ID. Read all course descriptions to preserve the larger spine, then author only the requested scope. For a course request, proceed through its sections in order and resume unfinished work based on authoring-progress.md and the actual source files.

For each section, prepare source-supported explanations, choose a canonical scene pattern, replace the scene/slide placeholders, and write complementary narration. Preserve references and verification status in a structured comment alongside the typed section source until richer reference support exists. Update the manifest if approved coverage changes; do not treat its original scaffold descriptions as an alternate editable curriculum.

Validate the section's types, registry references, technical claims, display, and continuity. Record actual results. Commit related content and progress together after meaningful validation; push when authorized. At course completion, review the course as a whole for gaps, repetition, stable example names, and a clear answer to its driving question.

Authored, reviewed, runtime-verified, and release-ready are different states. A section may be drafted while environment-dependent examples remain unverified, but it must not be marked technically verified or release-ready. Stop only dependent work when an essential environment or scope decision is missing; continue independent authoring where practical.

## Verification already performed

- TypeScript checks passed.
- Structural checks passed for seven courses, 50 sections, and matching scenes.
- Production build passed, with a large JavaScript bundle warning.
- Headless Chrome smoke checks passed for catalog content, first section scene, and mobile slide drawer; no uncaught page errors were observed.

These checks cover the scaffold, not authored Linux correctness or final visual/accessibility quality. Command execution in isolated Linux environments, comprehensive viewport inspection, narration generation, caption review, and publication remain outstanding.

## Boundaries

Do not generate narration audio, record videos, publish the website, modify shared libraries, or change package versions merely as a side effect of section authoring. Those actions need an applicable task instruction. Do not execute privileged Linux examples on the host. Use the selected isolated environment once defined, and distinguish illustrative output from captured output.

## Audio and video production belong to implementation

After section narration is authored and reviewed, generate the audio manifest with `npm run gen:audio`. Run the chosen Colab audio-generation notebook against that manifest and return the generated WAV files to `public/audio/<course-id>/<section-id>.wav`. Check that every clip matches the reviewed narration and intended section. Handle model access credentials in the runtime, never in committed notebook output or content.

The supplied SQL example includes a Colab notebook, but it was not copied into linux-authoring. Selecting/adapting the Linux Colab notebook and its input/output transfer process remains pending. Do not claim that a Colab run or audio generation has occurred.

Once audio and visuals are reviewed, use the shared `npm run record -- <course-id>` command to produce course video assets. Recording requires the toolchain's actual browser/media prerequisites; inspect its supported arguments before adding flags. Review the resulting audio/video and captions when produced. No narration audio or video has been generated yet.

Manifest generation, Colab audio generation, and video recording are implementation production steps. Uploading the finished video to YouTube and publishing website assets are deployment steps. These production actions run only when requested or authorized; authoring a section does not automatically trigger them.
