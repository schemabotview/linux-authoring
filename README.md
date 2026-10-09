# Linux Authoring

Linux course authoring project, based on the reusable seven-stage course authoring template.

## Current status

Stage 01 requirements are approved. Stage 02 course planning is drafted: see `02-planning/course-plan.md` for seven courses and 50 sections, using only a two-level courses → sections structure. The plan awaits review before design.

## Workflow

## Start a course

1. Copy this entire template into a separate course directory, such as `linux-fundamentals`. Keep the original template reusable.
2. Open `01-requirements/ai-prompt.md`, supply only the course topic, and run it in ChatGPT or Claude. It will propose default audience, prerequisites, outcomes, and scope for your confirmation before generating requirements.
3. Save the response as the stage output listed below. Review it before using it as input to the next stage.
4. Continue in order, attaching the earlier documents requested by each prompt. A chat cannot read a local path unless filesystem access is actually available.
5. Use the other model to review major drafts against their completion checklists. Resolve findings using sources and technical checks; model agreement alone does not establish correctness.
6. Approve the course brief and review representative sections before scaling production. Record release approval before publishing.
7. Use feedback to propose a revised requirements document and repeat affected stages.

| Folder | Prompt | Generated document |
|---|---|---|
| 01-requirements | ai-prompt.md | requirements.md |
| 02-planning | ai-prompt.md | course-plan.md |
| 03-design | Adopted design; no AI prompt | design.md |
| 04-implementation | ai-prompt.md authors courses section by section | implementation.md + source files + authoring-progress.md |
| 05-test | Manual user review + checks during authoring | testing.md |
| 06-deployment | Publishing procedure; no AI prompt | deployment.md |
| 07-feedback | Manual user feedback; no AI prompt | feedback.md |

## Working conventions

- Prompts are reusable instructions; generated documents are course-specific artifacts. Design and implementation guidance are reusable; implementation records and progress must be populated with actual subject-project results.
- Preserve stable requirement, outcome, course, and section IDs across revisions.
- Record input revisions, assumptions, and Draft/Approved status. An AI-generated checklist is not evidence that its checks ran.
- Author courses section by section after reviewing the curriculum and adopted design; `implementation.md` describes their production process.
- Website content and video scripts should derive from the same approved section source.
- Keep credentials and personal learner information out of prompts and the public repository.
- The deployment document records website and YouTube publishing. Audio generation and recording belong to implementation; actual publication is separate.

## Context is entered once

Stage 01 establishes the confirmed course brief. Stages 02–07 inherit it from the requirements document and approved stage outputs. There are no repeated course-context forms. Each stage proposes its own relevant decisions, and material changes to the approved brief require confirmation.

## Application scaffold

SQL's application structure has been adapted for Linux. All seven courses and 50 sections are navigable placeholders; final scenes, slides, narration, audio, and visual design are not authored.

- `src/content/`: one file per section, grouped by course.
- `src/scenes/`: matching declarative scene files and registry.
- `src/main.tsx`: shared GraphL shell integration.
- `scripts/course-manifest.json`: scaffold coverage, source IDs, and reference links derived from course-plan.md v0.3. Update alongside future approved plan revisions.
- `public/audio/`: reviewed narration assets, when generated.

### Run locally

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Development runs on port 5177. Build output uses `/linux-authoring/` for the intended GitHub Pages repository path. Deployment is not configured or executed yet.

`npm run check` validates types and course/section/scene structure. `node scripts/check-content.mjs --release` deliberately fails until placeholders and empty narration are replaced; it is a preliminary readiness guard, not full release QA.

### Shared libraries

This app pins published `@graphlearning/flow` 1.2.0 and `@graphlearning/shell` 0.8.0, with a lockfile. The cloned shell source reports 0.9.0, which was not published at scaffold time; the app uses the published 0.8.0 release, matching SQL. Sibling clones `../ui-flow` and `../ui-shell` are available for development but are not silently linked into the app. Shared rendering code is not copied into this repository.

Recording commands follow SQL: `record`, `record:reels`, `shots:4k`, `capture:shots`, `thumb`, `gen:audio`, and `gen:desc`. Author and review narration before generating audio or recording. Recording also requires the shared toolchain's browser and media prerequisites. No SQL recordings, notebooks, branding, or audio were copied.

### Scaffold verification

Type checking, course/section/scene validation, and production build passed. Headless Chrome checks passed for catalog content, section scene rendering, and the mobile slide drawer with no uncaught page errors. These checks do not constitute final visual or accessibility review.

Puppeteer's automatic browser download was skipped during setup; the browser check used installed Google Chrome. Recording requires a compatible Puppeteer browser, which can be installed separately when recording is needed. The production build currently reports a large JavaScript bundle; optimize after the rendering design is settled.

## Design and implementation documentation

Stage 03 records the adopted GraphL design in `03-design/design.md`; it has no generation prompt. Stage 04 documents implementation separately from authoring. Use `04-implementation/ai-prompt.md` for a target course or section, and record progress in `04-implementation/authoring-progress.md`.

Testing, deployment, and feedback use workflow documents rather than AI prompts. See `05-test/testing.md`, `06-deployment/deployment.md`, and `07-feedback/feedback.md`.
