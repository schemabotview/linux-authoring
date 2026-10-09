# Linux course plan

- Course: Linux — foundations through practical administration and troubleshooting
- Artifact version: 0.1
- Status: Draft — awaiting review
- Date: 2026-10-09
- Inputs: course-brief.md v1.0; requirements.md v1.0 (approved by user on 2026-10-09)
- Prompt: 02-planning/ai-prompt.md
- Technical versions: deferred to implementation; no version-specific commands are prescribed here

## 1. Approach and progression

Teach explanation, demonstration, guided practice, independent practice, and reflection in that order. Independent tasks use different inputs from demonstrations. Learners should verify state changes and explain why they worked.

The core progression includes foundations, command-line work, identity, operations, networking, storage, scripting, security, troubleshooting, and an integrated capstone. It preserves the approved scope; specialist kernel and enterprise tracks remain outside this plan. Expert proficiency requires continued practice beyond completion.

Lessons are sequential by default; prerequisite IDs below indicate the minimum immediate predecessor. Earlier acquired skills remain cumulative. Learners may use diagnostic results to prioritize review but still complete required assessments.

## 2. Module and lesson map

| Module | Title | Lessons |
|---|---|---|
| MOD-001 | Foundations and safe onboarding | LES-001–002 |
| MOD-002 | Files and everyday shell work | LES-003–005 |
| MOD-003 | Text processing and pipelines | LES-006–007 |
| MOD-004 | Identity and access | LES-008–009 |
| MOD-005 | Software and system operations | LES-010–012 |
| MOD-006 | Networking and remote access | LES-013–014 |
| MOD-007 | Storage and data recovery | LES-015–016 |
| MOD-008 | Shell scripting and automation | LES-017–019 |
| MOD-009 | Security and troubleshooting | LES-020–021 |
| MOD-010 | Integrated capstone | LES-022–024 |

| Lesson | Module | Title | Immediate prerequisite | Outcomes | Estimated hours | Deliverable |
|---|---|---|---|---|---|---|
| LES-001 | MOD-001 | Linux concepts and environment | None | LO-001 | 2 | Annotated inventory and concept answers |
| LES-002 | MOD-001 | Safe lab use and help resources | LES-001 | LO-001 | 2 | Help lookup notes and recovery checklist |
| LES-003 | MOD-002 | Paths and navigation | LES-002 | LO-002 | 2 | Verified paths and navigation transcript |
| LES-004 | MOD-002 | File operations and inspection | LES-003 | LO-002 | 3 | Final tree and operation explanation |
| LES-005 | MOD-002 | Editing and archives | LES-004 | LO-002, LO-003 | 3 | Edited files and archive restoration checks |
| LES-006 | MOD-003 | Searching and transforming text | LES-005 | LO-003 | 3 | Report and checked expected output |
| LES-007 | MOD-003 | Streams and pipelines | LES-006 | LO-003 | 3 | Pipeline, output, and failure explanation |
| LES-008 | MOD-004 | Users, groups, and privilege | LES-007 | LO-004 | 3 | Identity inventory and access rationale |
| LES-009 | MOD-004 | Ownership and permissions | LES-008 | LO-004 | 4 | Before/after access tests and explanation |
| LES-010 | MOD-005 | Software management | LES-009 | LO-005 | 3 | Package state checks and source notes |
| LES-011 | MOD-005 | Processes and resource usage | LES-010 | LO-005 | 3 | Evidence-based process report |
| LES-012 | MOD-005 | Services and logs | LES-011 | LO-005, LO-009 | 4 | Incident notes, correction, and verification |
| LES-013 | MOD-006 | Networking fundamentals and diagnosis | LES-012 | LO-006 | 4 | Network inventory and diagnostic report |
| LES-014 | MOD-006 | Authorized remote access | LES-013 | LO-006, LO-009 | 3 | Session evidence and security rationale |
| LES-015 | MOD-007 | Storage and mounts | LES-014 | LO-007 | 4 | Storage inventory and verified recovery |
| LES-016 | MOD-007 | Backup and restoration | LES-015 | LO-007 | 3 | Backup artifact and content comparison |
| LES-017 | MOD-008 | Shell scripts and parameters | LES-016 | LO-008 | 3 | Script, usage guide, and checked output |
| LES-018 | MOD-008 | Control flow and failure handling | LES-017 | LO-008 | 4 | Script and normal/failure-case results |
| LES-019 | MOD-008 | Routine automation project | LES-018 | LO-008, LO-007 | 4 | Automation artifact, logs, and verification |
| LES-020 | MOD-009 | Basic system security review | LES-019 | LO-009, LO-004, LO-006 | 4 | Findings, prioritized changes, and verification |
| LES-021 | MOD-009 | Structured troubleshooting | LES-020 | LO-009, LO-005, LO-006, LO-007 | 5 | Incident report with rejected hypotheses and tests |
| LES-022 | MOD-010 | Capstone planning and baseline | LES-021 | LO-010 | 3 | Project plan and baseline inventory |
| LES-023 | MOD-010 | Capstone build and automation | LES-022 | LO-010, LO-004, LO-005, LO-006, LO-007, LO-008 | 7 | Artifacts, checks, and reproducible instructions |
| LES-024 | MOD-010 | Capstone incident and handoff | LES-023 | LO-010, LO-009 | 5 | Final demonstration, incident report, and handoff |

Estimated total: **84 learner hours**. These are planning estimates, not measured durations. They include reading/viewing, practice, assessments, and capstone work; optional remediation is additional. Validate estimates during a learner pilot. No calendar dates are assigned because start date and author capacity are unspecified.

## 3. Lesson production specifications

Every lesson uses the canonical sequence below. Each independent task is assessed as ASM-xxx matching its lesson ID. Practical tasks require observable final-state checks; conceptual tasks require explanations scored against an answer rubric. Guided completion alone does not pass an independent assessment. Demonstrations and guided checkpoints for capstone lessons use separate practice scenarios, not the assessed solution.

### LES-001: Linux concepts and environment

- Concepts: Kernel, shell, distributions, user space.
- Demonstration: Identify a lab environment.
- Guided exercise: Annotate the provided environment inventory.
- Independent practice: Explain an unfamiliar environment diagram.
- Assessment: ASM-001; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Annotated inventory and concept answers.

### LES-002: Safe lab use and help resources

- Concepts: Isolation, checkpoints, help, documentation.
- Demonstration: Inspect help and restore sample state.
- Guided exercise: Locate command help and create a recovery checkpoint.
- Independent practice: Find instructions for a new task and describe its impact.
- Assessment: ASM-002; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Help lookup notes and recovery checklist.

### LES-003: Paths and navigation

- Concepts: Working directory, absolute and relative paths.
- Demonstration: Navigate a sample directory tree.
- Guided exercise: Find supplied files using both path forms.
- Independent practice: Locate files in a different tree.
- Assessment: ASM-003; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Verified paths and navigation transcript.

### LES-004: File operations and inspection

- Concepts: Create, inspect, copy, move, remove sample files.
- Demonstration: Reorganize disposable files with verification.
- Guided exercise: Build a required directory structure.
- Independent practice: Transform a fresh file tree into a specified final state.
- Assessment: ASM-004; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Final tree and operation explanation.

### LES-005: Editing and archives

- Concepts: Plain-text editing, archives, extraction.
- Demonstration: Edit a configuration sample and archive it.
- Guided exercise: Modify sample text and restore an archive.
- Independent practice: Package and restore an unfamiliar sample dataset.
- Assessment: ASM-005; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Edited files and archive restoration checks.

### LES-006: Searching and transforming text

- Concepts: Patterns, filtering, sorting, counting.
- Demonstration: Extract records from synthetic logs.
- Guided exercise: Answer questions about supplied text.
- Independent practice: Produce a report from a fresh dataset.
- Assessment: ASM-006; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Report and checked expected output.

### LES-007: Streams and pipelines

- Concepts: Standard streams, redirection, pipes, exit status.
- Demonstration: Combine filters and separate errors.
- Guided exercise: Construct a multi-step pipeline.
- Independent practice: Build a pipeline for a new reporting task.
- Assessment: ASM-007; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Pipeline, output, and failure explanation.

### LES-008: Users, groups, and privilege

- Concepts: Identity, groups, privilege boundaries.
- Demonstration: Create isolated practice identities.
- Guided exercise: Configure group membership in the lab.
- Independent practice: Model access for a new team scenario.
- Assessment: ASM-008; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Identity inventory and access rationale.

### LES-009: Ownership and permissions

- Concepts: Permission interpretation, ownership, access diagnosis.
- Demonstration: Diagnose a permission failure.
- Guided exercise: Repair supplied file access safely.
- Independent practice: Fix a fresh access problem without excessive permissions.
- Assessment: ASM-009; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Before/after access tests and explanation.

### LES-010: Software management

- Concepts: Repositories, packages, install/remove lifecycle.
- Demonstration: Install and remove approved lab software.
- Guided exercise: Inspect package information and dependencies.
- Independent practice: Complete a fresh package lifecycle task.
- Assessment: ASM-010; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Package state checks and source notes.

### LES-011: Processes and resource usage

- Concepts: Processes, signals, CPU, memory, resource inspection.
- Demonstration: Investigate a controlled resource issue.
- Guided exercise: Identify a supplied process and stop it safely.
- Independent practice: Diagnose a new resource scenario.
- Assessment: ASM-011; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Evidence-based process report.

### LES-012: Services and logs

- Concepts: Service lifecycle, logs, evidence collection.
- Demonstration: Diagnose a controlled service failure.
- Guided exercise: Inspect service state and relevant logs.
- Independent practice: Restore a fresh failed service and verify behavior.
- Assessment: ASM-012; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Incident notes, correction, and verification.

### LES-013: Networking fundamentals and diagnosis

- Concepts: Addresses, routes, name resolution, ports.
- Demonstration: Trace a lab connectivity problem.
- Guided exercise: Inspect and test a known network path.
- Independent practice: Identify the failing layer in a fresh scenario.
- Assessment: ASM-013; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Network inventory and diagnostic report.

### LES-014: Authorized remote access

- Concepts: Remote identity, authentication, host verification.
- Demonstration: Connect between authorized lab endpoints.
- Guided exercise: Establish and close a controlled remote session.
- Independent practice: Resolve an unfamiliar remote-access failure.
- Assessment: ASM-014; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Session evidence and security rationale.

### LES-015: Storage and mounts

- Concepts: Devices, filesystems, capacity, mount lifecycle.
- Demonstration: Inspect and mount disposable lab storage.
- Guided exercise: Perform a mount task in isolation.
- Independent practice: Diagnose a fresh lab storage issue.
- Assessment: ASM-015; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Storage inventory and verified recovery.

### LES-016: Backup and restoration

- Concepts: Backup scope, archives, integrity, restore verification.
- Demonstration: Recover changed sample data.
- Guided exercise: Back up and restore a supplied dataset.
- Independent practice: Recover a new dataset against a success checklist.
- Assessment: ASM-016; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Backup artifact and content comparison.

### LES-017: Shell scripts and parameters

- Concepts: Scripts, arguments, variables, quoting.
- Demonstration: Turn a manual task into a parameterized script.
- Guided exercise: Implement a small file-reporting utility.
- Independent practice: Automate a new task with unusual filenames.
- Assessment: ASM-017; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Script, usage guide, and checked output.

### LES-018: Control flow and failure handling

- Concepts: Conditions, loops, validation, errors, debugging.
- Demonstration: Debug a script with controlled failures.
- Guided exercise: Add validation and failure reporting.
- Independent practice: Handle normal and invalid inputs for a new task.
- Assessment: ASM-018; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Script and normal/failure-case results.

### LES-019: Routine automation project

- Concepts: Reusable automation, logging, repeatable execution.
- Demonstration: Automate a sample backup/report workflow.
- Guided exercise: Build an automation task with observable results.
- Independent practice: Adapt it to a fresh dataset and rerun safely.
- Assessment: ASM-019; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Automation artifact, logs, and verification.

### LES-020: Basic system security review

- Concepts: Least privilege, updates, access review, exposure.
- Demonstration: Review a deliberately imperfect lab system.
- Guided exercise: Correct supplied basic security findings.
- Independent practice: Review a fresh lab against a justified checklist.
- Assessment: ASM-020; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Findings, prioritized changes, and verification.

### LES-021: Structured troubleshooting

- Concepts: Symptoms, hypotheses, evidence, correction, recovery.
- Demonstration: Investigate a multi-symptom incident.
- Guided exercise: Resolve a guided incident without hiding evidence.
- Independent practice: Diagnose an unseen bounded lab failure.
- Assessment: ASM-021; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Incident report with rejected hypotheses and tests.

### LES-022: Capstone planning and baseline

- Concepts: Requirements, setup plan, baseline, recovery.
- Demonstration: Translate a project brief into acceptance checks.
- Guided exercise: Plan a practice administration scenario.
- Independent practice: Propose the assessed project plan independently.
- Assessment: ASM-022; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Project plan and baseline inventory.

### LES-023: Capstone build and automation

- Concepts: Integrated administration and repeatable operation.
- Demonstration: Review a small integration example.
- Guided exercise: Use practice checkpoints to validate an integration.
- Independent practice: Build the assessed environment and automation.
- Assessment: ASM-023; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Artifacts, checks, and reproducible instructions.

### LES-024: Capstone incident and handoff

- Concepts: Incident response, restoration, explanation.
- Demonstration: Review a sample handoff and incident rubric.
- Guided exercise: Rehearse diagnosis on a separate practice fault.
- Independent practice: Resolve an unseen project fault and demonstrate recovery.
- Assessment: ASM-024; evaluate independent evidence against the lesson objectives and rubric below.
- Expected evidence: Final demonstration, incident report, and handoff.

## 4. Assessments, grading, and completion

Proposed rubric for each practical assessment: correctness 40%, verification/evidence 25%, reasoning 20%, reproducibility 15%. Concept-only assessments use accuracy 60% and explanation 40%. Each criterion receives 0–4: absent, materially incomplete, partial, satisfactory, or strong. Weighted score is criterion rating divided by four times its weight.

Proposed pass threshold: 75% per required assessment, plus all critical task success checks. Unsafe actions outside the authorized lab, exposed credentials, or unverified recovery where recovery is required trigger remediation regardless of score. Thresholds are proposals pending plan review.

Completion requires passing ASM-001–024 and the capstone rubric. Learners may retry after targeted feedback using a different task variant. Do not average away an unachieved outcome. The entry diagnostic is ungraded. Knowledge checks provide formative feedback and do not replace practical assessment.

Capstone milestones:

1. ASM-022: define project requirements, acceptance checks, baseline, and recovery plan.
2. ASM-023: implement identity/access, an approved service, remote access, sample-data backup, and a reusable automation script in the supported lab.
3. ASM-024: diagnose an unseen bounded fault, restore required behavior, demonstrate sample-data recovery, and hand off reproducible instructions.

Capstone rubric: functional correctness 30%, diagnosis and recovery 25%, automation 15%, verification evidence 15%, and explanation/handoff 15%. Pass at 75% with all required acceptance checks and safety gates satisfied. Faults and assessed task variants must be withheld from worked solutions until after submission.

## 5. Traceability

| Outcome | Lessons | Independent assessments |
|---|---|---|
| LO-001 | LES-001, LES-002 | ASM-001, ASM-002 |
| LO-002 | LES-003, LES-004, LES-005 | ASM-003, ASM-004, ASM-005 |
| LO-003 | LES-005, LES-006, LES-007 | ASM-005, ASM-006, ASM-007 |
| LO-004 | LES-008, LES-009, LES-020, LES-023 | ASM-008, ASM-009, ASM-020, ASM-023 |
| LO-005 | LES-010, LES-011, LES-012, LES-021, LES-023 | ASM-010, ASM-011, ASM-012, ASM-021, ASM-023 |
| LO-006 | LES-013, LES-014, LES-020, LES-021, LES-023 | ASM-013, ASM-014, ASM-020, ASM-021, ASM-023 |
| LO-007 | LES-015, LES-016, LES-019, LES-021, LES-023 | ASM-015, ASM-016, ASM-019, ASM-021, ASM-023 |
| LO-008 | LES-017, LES-018, LES-019, LES-023 | ASM-017, ASM-018, ASM-019, ASM-023 |
| LO-009 | LES-012, LES-014, LES-020, LES-021, LES-024 | ASM-012, ASM-014, ASM-020, ASM-021, ASM-024 |
| LO-010 | LES-022, LES-023, LES-024 | ASM-022, ASM-023, ASM-024 |

Requirements concerning authoring, website behavior, publication, and maintenance require operational verification rather than learner grading.

| Requirement | Planned coverage | Validation or evidence |
|---|---|---|
| REQ-001 | All lesson/outcome/assessment IDs | Traceability and identifier check |
| REQ-002 | All lesson specifications | Metadata review |
| REQ-003 | All lesson explanations/demonstrations | Technical review and execution |
| REQ-004 | All practical lessons | Guided/independent exercise review |
| REQ-005 | All lab lessons | Setup, success, hints, solution, cleanup checklist |
| REQ-006 | ASM-001–024 | Rubrics and outcome coverage |
| REQ-007 | LES-022–024 | Capstone artifacts and rubric |
| REQ-008 | All lessons; design/implementation | Website functional review |
| REQ-009 | All instructional videos | Script-to-lesson consistency review |
| REQ-010 | Deployment stage | Verified GitHub Pages and YouTube release manifest |
| REQ-011 | All production artifacts | Repository/source/review history |
| REQ-012 | Production drafting/review tasks | Provider-independent task contracts and review records |
| REQ-013 | All generated assets | Lesson revision/dependency map |
| REQ-014 | Feedback stage | Lesson-linked intake and change proposals |
| REQ-015 | Design and all published lessons | Responsive and accessibility checks |
| REQ-016 | All videos | Caption/transcript review |
| REQ-017 | All lessons | Canonical template review |
| REQ-018 | All runnable examples | Supported-environment execution records |
| REQ-019 | LES-002, 008–024 as applicable | Isolation, impact, and recovery review |
| REQ-020 | All public assets | Secrets/privacy review |
| REQ-021 | All technical claims | Authoritative sources and currency records |
| REQ-022 | All production stages | Draft/review/execution/approval metadata |
| REQ-023 | Website implementation/testing | Agreed performance budget and measured results |
| REQ-024 | Build and release process | Repeated build/release/recovery evidence |
| REQ-025 | All third-party assets | Rights and attribution inventory |

No outcome or requirement is unmapped. Coverage here is planned, not evidence of implementation or successful testing. Concrete technical test cases and UI checks remain for the test stage.

## 6. Production backlog and milestones

Effort estimates below are author/reviewer person-hours, separate from learner study time. They exclude waiting time and require pilot calibration. One person may hold several roles but should record review explicitly.

| Priority | Work package | Dependencies | Owner / reviewer | Estimate | Milestone evidence |
|---|---|---|---|---|---|
| P0 | Review course plan and rubrics | Approved requirements | Curriculum author / instructional reviewer | 3–6 h | Approved plan |
| P0 | Define lesson schema, UI, video patterns | Approved plan | Designer / author | 8–16 h | Reviewed design |
| P0 | Select and validate lab environment | Lesson capability list | Technical author / technical reviewer | 8–20 h | Environment matrix and setup checks |
| P0 | Build representative pilot LES-009 | Design and isolated environment | Author / technical and learning reviewers | 10–18 h | Complete lesson, lab, assessment, video sample |
| P0 | Pilot renderer and validation pipeline | Content schema and pilot lesson | Implementer / QA | 12–24 h | Reproducible preview and checks |
| P1 | Produce LES-001–008 and LES-010–021 | Accepted pilot and environments | Author / technical and learning reviewers | 4–8 h per lesson | Reviewed lesson bundles |
| P1 | Produce LES-022–024 and fault variants | Core content and rubric | Author / independent technical reviewer | 18–30 h total | Capstone package |
| P1 | Record/edit/caption videos | Approved lesson scripts | Presenter/editor / reviewer | 2–5 h per lesson | Reviewed video assets |
| P1 | Execute course tests and learner pilot | Complete candidate content | QA and representative learners / author | 12–24 h author/QA | Findings and revised estimates |
| P1 | Prepare and verify release | Required checks and publishing approval | Release owner / reviewer | 4–8 h | Verified release manifest |
| P2 | Process feedback and maintenance | Published release or learner pilot | Author / reviewer | Set after feedback volume is known | Prioritized improvements |

LES-009 is the proposed production pilot because it exercises explanation, command/output presentation, a diagram, isolated lab state, independent diagnosis, and verification. It is a production sample; learner delivery remains sequential. Prerequisite scaffolding must accompany pilot testing with beginners.

## 7. Environment and reusable assets

Implementation must select environments supporting identity changes, service management, networking between endpoints, disposable storage, and recovery. Do not assume a single container is sufficient. Record host support, resource needs, setup, reset, and supported versions after validation.

Prepare synthetic directory trees, text/log datasets, disposable identities, controlled service/process scenarios, two authorized network endpoints, disposable storage, backup datasets, script input variants, and bounded fault scenarios. No real credentials or personal data are needed.

Reusable assets include lesson metadata, source records, lab setup/reset/check routines, exercise/hint/solution templates, assessment rubrics, diagrams, video storyboards, transcripts, and release mappings. Exact UI and tooling choices belong to design and implementation.

## 8. Risks and review

The main risks are excessive scope, underestimated practice time, host differences, unsafe exercises, answer leakage into assessments, and website/video drift. Mitigate through a bounded core, learner pilot, explicit environment support, isolation/recovery checks, separate task variants, and shared source IDs.

## Assumptions

- English and self-paced written/video delivery remain inherited proposed defaults; no new confirmation is claimed.
- All 24 lessons are core; future specialist tracks are excluded.
- No calendar schedule or paid-cloud dependency is introduced.
- Study and production estimates are provisional and have not been validated with learners.

## Open questions

- Does review support the proposed 24-lesson depth and 75% thresholds?
- Which learner host environments can be supported reliably? Resolve in implementation.
- Which accessibility and performance targets should be adopted? Resolve in design/testing.
- Who will conduct independent technical review and participate in the learner pilot?

## Stage completion checklist

- [x] Inherited approved scope and stable requirement/outcome IDs.
- [x] Defined modules, lessons, prerequisites, study estimates, and deliverables.
- [x] Specified concepts, demonstrations, guided practice, independent tasks, and evidence per lesson.
- [x] Mapped all outcomes and requirements to planned coverage.
- [x] Proposed rubrics, production milestones, responsibilities, and risks.
- [ ] Course plan and assessment thresholds reviewed and approved.
- [ ] Proceed to design using the reviewed plan revision.
