# Linux authoring progress

- Updated: 2026-10-09
- Baseline: course-plan.md v0.3; 7 courses, 50 sections
- Current state: CRS-001 SEC-001–007 authored in plan order; all other sections remain scaffold placeholders.
- Scope: courses → sections preserved; one scene, slide, and narration per section. No audio generation, video recording, or publication performed.

## Course status

| Course | Sections | Authoring | Technical verification | Visual review |
|---|---|---|---|---|
| CRS-001 | SEC-001–007 | Drafted; author checks below | References checked; Linux execution/setup pending | Author desktop/mobile inspection; manual user review pending |
| CRS-002 | SEC-008–014 | Scaffold | Pending | Pending |
| CRS-003 | SEC-015–021 | Scaffold | Pending | Pending |
| CRS-004 | SEC-022–028 | Scaffold | Pending | Pending |
| CRS-005 | SEC-029–036 | Scaffold | Pending | Pending |
| CRS-006 | SEC-037–043 | Scaffold | Pending | Pending |
| CRS-007 | SEC-044–050 | Scaffold | Pending | Pending |

## Section records

All rows below were drafted and author-checked by Codex on 2026-10-09. Drafted does not mean Reviewed or release-ready. Source URLs, claim mappings, reference versions, assumptions, and limitations are also retained in structured comments in each section source.

| Section | Source keys | Actual technical check | Visual check | Outstanding |
|---|---|---|---|---|
| SEC-001 | K, D, B | Kernel/distribution/shell roles compared with references; no commands | Desktop scene/slide and mobile drawer inspected | User review; link contrast |
| SEC-002 | V | VM concept checked; proposed setup explicitly unvalidated | Desktop scene/slide and mobile drawer inspected | Select distribution/release and supported hosts; validate installation and restore; user review |
| SEC-003 | B, L | Command/argument and ls option reference check; no execution | Desktop scene/slide and mobile drawer inspected | Linux execution; user review; mobile code readability |
| SEC-004 | B, P, R | Path semantics checked; illustrative sequence assumes existing /home/maya and successful cd | Desktop/mobile inspected; shortened crowded mobile slide | Linux execution; user review; mobile code readability |
| SEC-005 | M, L, B, Q | Manual headings, builtin help and pager keys checked; no execution | Desktop scene/slide and mobile drawer inspected | Installed documentation/pager validation; user review |
| SEC-006 | U, O, I, C, R | Kernel/distribution/identity distinctions checked; no execution | Desktop/mobile inspected; shortened crowded mobile slide | Linux execution; user review; mobile code readability |
| SEC-007 | B | History/context/error guidance compared with Bash behavior; no execution | Desktop/mobile inspected; shortened crowded mobile slide | Linux execution; recovery validation; user review |

## Sources checked on 2026-10-09

Primary project documentation, including upstream-authored manual pages hosted by man7. Reference versions describe the documents, **not** the installed learner environment.

| Key | Source and version | Claims supported |
|---|---|---|
| K | [Linux kernel README](https://www.kernel.org/doc/html/latest/admin-guide/README.html), rolling 6.x documentation | Kernel resource capabilities and hardware context |
| D | [Debian overview](https://www.debian.org/intro/about), rolling web page | Distribution composition and desktop/server/embedded uses |
| B | [GNU Bash manual page](https://man7.org/linux/man-pages/man1/bash.1.html), Bash 5.3 | DESCRIPTION, SIMPLE COMMANDS, PROMPTING, cd/pwd/help builtins, HISTORY, READLINE, EXIT STATUS |
| V | [Kernel KVM documentation](https://docs.kernel.org/virt/kvm/index.html), rolling | Virtualization concept; does not validate any proposed host setup or checkpoint procedure |
| L | [ls(1)](https://man7.org/linux/man-pages/man1/ls.1.html), GNU coreutils 9.11 | -a, --help |
| P | [pwd(1)](https://man7.org/linux/man-pages/man1/pwd.1.html), GNU coreutils 9.11 | Working-directory reporting; Bash builtin used in examples |
| R | [path_resolution(7)](https://man7.org/linux/man-pages/man7/path_resolution.7.html), Linux man-pages 6.19 | Absolute/relative paths, dot components, UID 0 and privilege qualifications |
| M | [man(1)](https://man7.org/linux/man-pages/man1/man.1.html), man-db 2.13.1 | Numbered manual sections and page structure |
| Q | [less(1)](https://man7.org/linux/man-pages/man1/less.1.html), served page; version not pinned | Search and quit; pager may differ |
| U | [uname(1)](https://man7.org/linux/man-pages/man1/uname.1.html), GNU coreutils 9.11 | Kernel name/release options |
| O | [os-release(5)](https://man7.org/linux/man-pages/man5/os-release.5.html), systemd 262~devel | Distribution identity fields; no development-only features used |
| I | [id(1)](https://man7.org/linux/man-pages/man1/id.1.html), GNU coreutils 9.11 | User/group identity reporting |
| C | [cat(1)](https://man7.org/linux/man-pages/man1/cat.1.html), GNU coreutils 9.11 | Display file contents |

The plan's GNU Bash manual links and direct GNU manual pages timed out through the web tool; a direct download also failed DNS resolution. The upstream Bash manual page hosted by man7 was accessible and used instead. The plan's LFS101 outline was not used as proof of detailed claims. No successful Linux command execution is claimed.

## Actual checks and evidence

- Read requirements, full course plan/spines, design, implementation, authoring prompt/progress, testing workflow, package/lockfile, registries, target sources, and installed public types. Kept flow 1.2.0 / shell 0.8.0 and stylesheet integration unchanged.
- `npm run check`: passed TypeScript and structure checks for 7 courses / 50 sections. Extended structural validation to reject dangling scene edge endpoints, including nested edges; corrected its outdated scaffold-only message.
- `npm run build`: passed; existing large-bundle warning remains (about 1.125 MB minified JS). This is not performance approval.
- `node scripts/check-content.mjs --release`: intentionally fails at SEC-008, the first remaining scaffold. This confirms CRS-001 passes the preliminary nonempty-content guard, not full release criteria.
- `git diff --check`: passed before commit.
- Preview: local Vite on port 5178 (5177 already occupied), installed Google Chrome via Puppeteer, 1440×900 and 390×844. All seven routes rendered the expected scene nodes (four including SEC-001’s container; three elsewhere) and the correct slide heading; no uncaught page errors or horizontal document overflow. Mobile drawer opened for every section. Inspected all 14 scene/slide or drawer screenshots; corrected crowding in SEC-004/006/007 and reinspected those captures. Mobile scenes also captured separately with drawers explicitly closed; inspected all seven. Reworked SEC-001/002 into narrow vertical compositions after their initial branching layouts rendered too small on mobile. Next-button and Shift+Left navigation passed.
- Reproducible browser check: `PREVIEW_URL=http://127.0.0.1:5178/linux-authoring/ node scripts/check-crs001-preview.mjs`. Set `CHROME_PATH` for another installed browser. Screenshots/results default to ignored `scripts/out/crs-001-review`; this run used `/tmp/linux-authoring-review`. These are layout captures, not recorded videos. Results summary retained in `04-implementation/checks/crs-001-preview.json`.
- Chrome initially could not launch inside the sandbox; running the same local verification with the approved browser permission succeeded.
- No isolated Linux runtime detected (neither Docker nor Podman available); no commands were run on the host as substitutes. Output and prompt examples are illustrative. VM provisioning, exact platform/release selection, shared-folder/network boundaries, and tested recovery remain pending.
- Visual limitation: shared shell renders source links in low-contrast default blue on dark backgrounds, and code blocks use small type on mobile. No shared-library edits or per-section CSS workarounds introduced. Comprehensive keyboard/focus/contrast/reduced-motion/transcript checks remain pending.

## Continuity notes

- Fictional team system: `team-lab`; ordinary example user: `maya`; home: `/home/maya`; parent: `/home`. These are demonstration identities, not provisioned resources.
- No services or datasets named yet. No distribution/release selected as supported. Debian is a distribution example, not an approved lab baseline.
- Proposed lab: disposable Linux VM with Bash and ordinary user; setup/recovery not validated. Prompt labels are configurable and do not establish identity.
- Course spine: roles → boundaries → interface → location → documentation → identity → safe decisions. Each narration connects to the next section; SEC-007 answers “What am I interacting with, and how do I find my way?” and hands off to team files in CRS-002.

## Whole-course author review

On 2026-10-09 Codex compared SEC-001–007 against every CRS-001 plan description. Conceptual coverage and sequence are present; setup guidance is explicitly incomplete pending platform validation. Terminology and Maya/team-lab/home identities are consistent. Repeated identity/location checks in SEC-007 are intentional consolidation. Narration complements the scene/slide and makes no claim of timed reveals or live execution. No topics, lessons, exercises, assessments, or learner evidence fields added.

Earlier requirements.md still describes lessons, exercises, assessments, and evidence; later explicit user decisions and course-plan v0.3 supersede that curriculum structure. Document alignment remains a separate decision; older requirements were not silently removed or rewritten.

## Next work

Within CRS-001: validate a supported lab and recovery route, execute examples, resolve UI readability/contrast findings, and obtain actual manual user review. No section remains unauthored in CRS-001; next unfinished section in the path is SEC-008 (CRS-002), outside this request. Audio, recording, and publication remain unauthorized for this run.

## Composition follow-up — 2026-10-09

User requested a check of canonical diagrams and better use of the scene/slide screen space, comparing `/Users/maddipotiganesh/graphl-workspace/linux`. Read the reference source as comparison material; its embedded comments and narration constraints were not adopted as task instructions. Its installed packages match this repository: flow 1.2.0 and shell 0.8.0. Both use the same ConceptApp and three-token subject theme. The useful differences are authored composition (grouped boards, code cards, tables, subheadings), not a separate viewport layout.

The original canonical pattern table is in `03-design/design.md`; authoring step 5 already required choosing one. Expanded those instructions with concrete code/table/container choices and checks for pane utilization, diagram aspect ratio, short code lines, and header/footer clearance. The reference has a different curriculum; no sections or unverified Linux claims were imported.

Revised all seven CRS-001 compositions:

| Section | Scene revision | Slide revision |
|---|---|---|
| SEC-001 | Distribution boundary contains user space and kernel; request relationship retained | System roles and story under two subheadings |
| SEC-002 | Host boundary contains proposed lab; separates valuable host data, ordinary identity, and checkpoint | Proposed setup and boundary guidance grouped |
| SEC-003 | Real code card with illustrative prompt, command, and result; compact interpretation list | Explains the interaction rather than duplicating code |
| SEC-004 | Nested filesystem hierarchy plus command/result code card | Absolute/relative context and interpretation of movement |
| SEC-005 | Help-choice table plus compact manual-reading list | Reference choice and reading guidance |
| SEC-006 | Identity-command comparison table plus interpretation list | Distinguishes observations from conclusions |
| SEC-007 | Before-command and after-command checks, linked in operating order | Same sequence in two subheadings |

Commands/output remain illustrative. SEC-003 shows dot and dot-dot for an otherwise empty example directory, not a captured Maya home. SEC-004 prefixes commands with `$` and leaves the illustrative output unprefixed. Narration was adjusted to match the changed compositions. Reference sources and pending Linux execution remain as recorded above.

Actual follow-up checks:

- `npm run build` (including TypeScript/structure checks): passed; large-bundle warning remains. `git diff --check`: passed.
- `scripts/check-crs001-preview.mjs`: all seven routes at 1440×900 and 390×844 passed title, registry-derived node-count, and horizontal-overflow checks; no uncaught page errors. Next button and Shift+Left navigation passed. Added actual diagram/pane geometry to the results; counts now derive from the scene registry rather than assuming a fixed three-node scene.
- Captured and inspected desktop scene/slide pairs, mobile scenes with drawer closed, and mobile reading surfaces with drawer open. Waited for the drawer transition to settle before final captures. Replaced oversized default 64-column code cards with the public `hug` field and short filenames; compacted long prose-node stacks into list cards. Kept visible commands legible in portrait rather than widening them to fill desktop at any cost.
- Used the public scene `padding` field (0.18) to retain space around the fitted diagram for navigation. No invisible spacers, hand-set coordinates, subject CSS overrides, package changes, or shared-library changes.
- Final geometry, browser environment, and navigation results are in `checks/crs-001-composition-preview.json`. Representative desktop/mobile captures are retained beside that record; complete local captures are in `/tmp/linux-authoring-composition` and can be reproduced with `PREVIEW_URL=http://127.0.0.1:5178/linux-authoring/ node scripts/check-crs001-preview.mjs`.

These follow-up compositions supersede the initial scene layouts and node counts in the earlier check record. Content now makes more useful use of each pane, but manual user review, Linux setup/execution, and comprehensive accessibility checks remain pending. The shared shell’s low-contrast source-link color is still outstanding. No audio, video recording, or publication performed.

## Shared master map follow-up — 2026-10-09

User approved a consistent master map with focused section views. Implemented one native ui-flow reference scene (`#/linux-system-map`) and shared layer identities, labels, and semantic patterns. SEC-001 now introduces only applications, kernel, and hardware; SEC-002–007 expand the bands relevant to their existing teaching purpose. The host/guest distinction remains separate from user/kernel space. Existing course order, section IDs, spines, ui-shell routes, and curriculum count (7 courses / 50 sections) remain intact. Reference scenes have a separate registry and structural validation.

Each CRS-001 slide links to the overview and a 1600×1920 readable poster rendered from the same scene. The full map is deliberately dense and its detail is too small at ordinary mobile size; focused views are the teaching presentation. The poster is a regenerable screenshot, not video or a separately authored diagram. Native grouped cards, grids, lists, code, tables, and relationship edges suffice for these views; exact styling of the supplied poster and interactive pan/zoom are not exposed by the current SceneView integration. No package or shared-library changes were made. The final poster check caught a development/production base-path mismatch; Vite now uses `/linux-authoring/` consistently, and the browser checks were repeated against that configuration.

Sources checked for the map: Linux kernel administration documentation (`https://docs.kernel.org/admin-guide/index.html`, rolling index), Linux man-pages system-call interface (`https://man7.org/linux/man-pages/man2/syscalls.2.html`, syscall list through Linux 5.14), systemd boot overview (`https://man7.org/linux/man-pages/man7/bootup.7.html`), and conventional directory hierarchy (`https://man7.org/linux/man-pages/man7/hier.7.html`). Existing Debian distribution source retained. The supplied image and comparison repository informed visual composition; their embedded instructions were not adopted as user requests. The shared ChatGPT link could not be retrieved; the attached image was available. The map describes representative relationships, not a mandatory pipeline, universal boot sequence, or validated Linux release.

Actual checks: TypeScript, curriculum/reference structure checks, production build, and whitespace checks passed. Build retains the existing large-bundle warning. Local Chrome checked all seven sections at 1440×900 and 390×844, including scene/slide captures, expected node counts, horizontal overflow, Next and Shift+Left navigation. Checked the actual overview link, browser Back, overview at desktop/tall/mobile sizes, and poster HTTP 200 with image/png. No browser errors reported. Compact results are retained in `checks/crs-001-master-map-preview.json`; captures are reproducible with the preview check script. Visual review prompted compact SEC-001 summaries to avoid excessive wrapping.

These views supersede the earlier composition record's layouts and node counts. Manual user review, supported Linux lab execution/recovery, and comprehensive accessibility checks remain pending; source-link contrast remains a shared-shell limitation. No audio generation, video recording, or publication performed.

## Denser SEC-001 composition — 2026-10-09

User requested a denser introductory scene using the supplied screenshot as a composition reference. Expanded SEC-001 into a grouped software/hardware map and companion kernel-purpose panel. Shared master-map labels and semantic patterns remain; a distribution contains software, while hardware sits outside its boundary. The view details shell/applications, system calls, CPU/process scheduling, memory, device access, and physical/virtual resources. The companion panel connects these to resource sharing, common interfaces, and managed access. No boot/history teaching or claims from the reference screenshot were imported. Updated narration and map-layer metadata; existing sources support these roles.

Actual checks: production build and TypeScript/structure checks passed (existing bundle-size warning remains). Chrome checks passed all seven routes at desktop/mobile sizes, expected node counts, no horizontal overflow/browser errors, section navigation, overview/Back, and poster response. Reviewed SEC-001 desktop and mobile scene/slide captures; increased padding to 0.18 for footer clearance and repeated the browser checks. Dense scene labels are small on a 390px phone because the installed SceneView fits the entire scene and exposes no zoom; the slide remains the readable companion. Compact results and representative SEC-001 desktop/mobile captures are retained under `checks/crs-001-dense-*`. This supersedes SEC-001's prior three-summary composition only. Linux runtime validation and human review remain pending. No audio, video, or publication.

## Dense focused scenes SEC-002–007 — 2026-10-09

User requested the next sections use denser scenes like the revised SEC-001. Expanded the remaining six CRS-001 scenes in order, preserving shared map bands, section IDs, course spine, story identities, and the existing ui-shell/ui-flow integration. Added grouped context cards and interpretation panels drawn from each section's existing narration:

| Section | Expanded composition |
|---|---|
| SEC-002 | Host/guest boundary plus shared-folder, network, and restoration relationships |
| SEC-003 | Session and line breakdown side by side; terminal, shell, command/result roles and submission interpretation |
| SEC-004 | Connected shell/filesystem view; absolute/relative paths, location check, and failed-movement context |
| SEC-005 | Help table/manual anatomy side by side; tool/manual/builtin entry points and reading conventions |
| SEC-006 | Inspection table and interpretation side by side; kernel/distribution/identity observations and missing-access context |
| SEC-007 | Before/after command flow; system, location, documentation context and deliberate retry decisions |

No new technical topics or Linux output were introduced. Existing per-section primary sources and source-version limitations remain applicable; this composition pass reused previously checked claims rather than claiming fresh source verification or executed Linux commands. Updated structured composition metadata in each section. Scene and narration were compared for agreement; the added cards make existing narration visible. SEC-001 and the full master map remain unchanged.

Actual checks: production build, TypeScript, curriculum/reference structure validation, and whitespace checks passed. Existing bundle-size warning remains. Chrome checked all seven desktop/mobile routes (1440×900 / 390×844), scene/slide drawer captures, expected node counts, no horizontal overflow, navigation, overview link, browser Back, poster response, and browser errors. Initial preview exposed a fragmented SEC-004 layout; grouping its connected diagram and arranging related cards horizontally improved desktop readability, followed by another complete browser check. Visually inspected all six desktop and mobile scene captures. Desktop header/footer clearance is retained. Dense mobile labels remain small under whole-scene fitting with no exposed zoom; this is a known readability limit, not accessibility approval. Slides were unchanged and retain the reading companion.

Compact browser results and representative desktop/mobile captures are in `checks/crs-001-dense-next-*`. Full captures are reproducible via `scripts/check-crs001-preview.mjs`. This record supersedes SEC-002–007's earlier scene geometry/node counts. Manual user review, Linux lab execution/recovery, and comprehensive accessibility checks remain pending; shared-shell source-link contrast remains outstanding. No audio generation, video recording, or publication performed.

## Horizontal host container and fuller slides — 2026-10-09

User requested SEC-002's top container flow left to right and better use of the right slide across all sections. Set the host container's public `flow` to `LR`: its relationship edge now lays out important host data beside the proposed VM. The former `cols: 2` did not determine direction when that container used edge-based layout. Master-map vocabulary and host/guest semantics remain unchanged.

Added one concise, section-specific explanatory block to each SEC-001–007 slide, drawing from its existing narration and previously checked sources: cooperating roles, lab connections, one command line, relative-path context, help entry points, precise identity questions, and applying the command habit. No new topics, invented outputs, source-verification claims, or curriculum levels. Shared shell centers and scales the right slide; no subject CSS overrides or shared-package edits were introduced. Structured composition metadata records the change.

Actual checks: production build, TypeScript and curriculum/reference structure checks passed; existing large-bundle warning remains. First slide expansion pushed some source links beyond the desktop viewport; trimmed it and repeated browser checks. Added desktop slide-bound assertions to the preview script (24px minimum top/bottom clearance at 1440×900). Final seven slides occupy 723–826px of the 900px desktop height; all content and links fit without scrolling. All seven mobile slides also fit within 390×844 (579–657px content height), clear of footer controls. Visually inspected all desktop slides and representative mobile slides (SEC-001/002/006/007). Expected scene nodes, horizontal overflow, section navigation, overview link/Back, poster response, and browser error checks passed. Evidence: `checks/crs-001-space-preview.json` and representative captures beside it. Whitespace checks passed before commit.

This supersedes the earlier SEC-002 vertical composition and the earlier slide dimensions. Dense phone scene text, source-link contrast, human review, Linux lab execution/recovery, and comprehensive accessibility review remain pending as previously recorded. No audio, video, or publication.

## Remove section links — 2026-10-09

User requested removal of links in each section. Removed learner-facing source, system-map overview, and poster links from all seven CRS-001 slides. Source URLs remain in structured authoring metadata for traceability; reference scene and poster assets remain directly addressable. Updated the browser checker to assert zero slide links and visit the overview directly rather than expecting a removed section link. No narration, scene, curriculum structure, or technical claims changed.

Actual checks: production build and its TypeScript/structure checks passed (existing bundle warning remains); whitespace check passed. Desktop/mobile browser checks assert zero links on all seven slides, valid scene node counts, no horizontal overflow, desktop slide clearance, section navigation, direct overview/Back, poster response, and no browser errors. Compact results: `checks/crs-001-no-links-preview.json`. This supersedes earlier check descriptions of section-to-overview links. No audio, video, or publication.
