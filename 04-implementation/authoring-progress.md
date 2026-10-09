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
