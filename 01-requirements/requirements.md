# Linux course requirements

- Course: Linux — foundations through practical administration and troubleshooting
- Artifact version: 0.1
- Status: Draft — derived from the confirmed brief; detailed requirements await review
- Date: 2026-10-09
- Input: `course-brief.md` version 1.0, confirmed by the user on 2026-10-09
- Authoring instructions: `ai-prompt.md`, repository baseline `a855c20`
- Technical verification: no distribution, release, or tooling version selected or verified at this stage

## 1. Course summary

Create a practical Linux learning progression for people starting without Linux experience. Learners should progress from understanding their environment to independently completing administration tasks, automating routine work, and investigating failures using evidence.

The course addresses the gap between recognizing commands and applying them responsibly to real tasks. Explanations, demonstrations, guided exercises, independent labs, and projects will use a consistent teaching structure.

Expert proficiency is a long-term aspiration requiring repeated real-world practice and specialist study. Course completion demonstrates the defined outcomes, not universal expertise or a professional certification.

## 2. Learners, prerequisites, and entry assessment

| Persona | Starting position | Primary need |
|---|---|---|
| New Linux learner | Basic computer skills; no Linux experience | Clear explanations, setup guidance, and frequent practice |
| Developer or data practitioner | Uses software tools but lacks system knowledge | Command-line fluency, processes, permissions, networking, and automation |
| Aspiring administrator or cloud practitioner | Wants to manage Linux systems | Operational practice, diagnosis, recovery, and documented projects |

Basic computer use and file management are the only required starting skills. Programming, cloud accounts, and prior Linux experience are not prerequisites. Familiarity with browsers, downloading files, and editing plain text can be taught through a short onboarding guide when needed.

The entry assessment should be diagnostic rather than exclusionary: ask learners to locate a file, distinguish a file from a folder, identify their host operating system, and explain their learning goal. A short optional Linux diagnostic may suggest lessons to review; it must not silently exempt a learner from required assessments.

## 3. Measurable learning outcomes

| ID | By completion, learners can… | Required evidence |
|---|---|---|
| LO-001 | Explain the roles of the kernel, shell, distribution, filesystem, and user space; identify their lab environment | Concept check and annotated environment inventory |
| LO-002 | Navigate directories and create, inspect, copy, move, and remove practice files using appropriate paths | Independent file-management task with verified final state |
| LO-003 | Search and transform text and combine commands using streams, redirection, and pipelines | Reproducible task with sample input and checked output |
| LO-004 | Create practice users and groups and diagnose ownership and permission problems | Isolated access-control scenario with before/after evidence |
| LO-005 | Install and remove approved lab software and investigate processes, services, resource usage, and logs | Administration checklist and evidence-based diagnosis |
| LO-006 | Inspect network configuration, test connectivity, and use remote access within the lab | Connectivity investigation and successful authorized remote session |
| LO-007 | Inspect storage, perform a lab filesystem or mount task, and back up and restore sample data | Isolated storage exercise and verified restoration |
| LO-008 | Write and debug shell scripts with parameters, conditions, loops, appropriate quoting, and failure handling | Script, usage instructions, and normal/failure-case results |
| LO-009 | Apply basic security practices and troubleshoot common system failures systematically | Security review and incident report with diagnosis, correction, and verification |
| LO-010 | Complete an integrated administration project and explain decisions, evidence, and recovery steps | Capstone artifacts, reproducible instructions, and assessed demonstration |

Assessment tasks and grading thresholds will be defined in planning. Every outcome must map to at least one lesson and one independent assessment. Evidence must demonstrate the learner's result, not merely repeat demonstration commands.

## 4. Scope

### In scope

- Linux concepts, environment onboarding, help resources, and command-line fundamentals.
- Files, paths, text processing, streams, redirection, pipelines, and archives.
- Users, groups, ownership, permissions, and responsible privilege use.
- Software management, processes, services, resource inspection, and logs.
- Basic networking, connectivity diagnosis, and authorized remote access.
- Storage concepts, isolated filesystem/mount practice, and backup/restoration.
- Shell scripting and routine task automation.
- Basic security, common failure diagnosis, and recovery verification.
- Integrated practical projects and progressive independent exercises.

### Outside the core progression

Kernel development, deep distribution internals, specialized enterprise infrastructure, advanced offensive security, and provider-specific cloud administration. Specialist tracks may be proposed later, without expanding the approved core silently.

Planning will determine module boundaries and advanced-track separation. Cross-distribution differences should be explained where relevant; the course need not support every distribution or host platform.

## 5. Functional requirements

| ID | Requirement | Acceptance evidence |
|---|---|---|
| REQ-001 | Maintain stable outcome, module, lesson, assessment, and requirement IDs | Validated identifiers and outcome-to-assessment map |
| REQ-002 | State objectives, prerequisites, and expected learner evidence for every lesson | Lesson metadata review |
| REQ-003 | Provide explanations and worked examples with context and expected results | Representative lesson review and technical execution evidence |
| REQ-004 | Include guided practice followed by independent practice for practical objectives | Exercise inventory mapped to objectives |
| REQ-005 | Provide lab setup, initial state, steps or task brief, success checks, hints, solutions, and cleanup/recovery | Lab review and repeatable execution |
| REQ-006 | Assess every outcome with a defined rubric and independent learner evidence | Assessment traceability and rubric review |
| REQ-007 | Include an integrated capstone covering administration, automation, and troubleshooting | Capstone rubric and mapping to LO-010 and supporting outcomes |
| REQ-008 | Render approved lessons as a navigable website with code, expected output, exercises, and video/transcript references | Website review and functional checks |
| REQ-009 | Derive video scripts and storyboards from approved lessons and preserve objective/example consistency | Lesson-to-video review |
| REQ-010 | Publish approved written content through GitHub Pages and approved videos through YouTube | Release manifest and verified published URLs |
| REQ-011 | Store sources, prompts, review status, content revisions, and release history in version control | Repository and release-record review |
| REQ-012 | Support drafting and reviewing with ChatGPT and Claude using reusable task instructions | Documented task contracts and review records |
| REQ-013 | Track source lesson revisions and identify affected website, assessment, lab, and video assets after changes | Dependency map and demonstrated change-impact review |
| REQ-014 | Associate feedback with lesson IDs and course releases and route it into reviewed improvement proposals | Feedback schema and requirements-change process |

## 6. Nonfunctional requirements

| ID | Requirement | Acceptance evidence |
|---|---|---|
| REQ-015 | Support readable responsive layouts, keyboard navigation, semantic structure, descriptive links, and accessible instructional visuals | Manual and automated accessibility review defined during design/testing |
| REQ-016 | Provide accurate captions and transcripts for instructional videos | Caption/transcript review |
| REQ-017 | Keep terminology, lesson layout, code formatting, and teaching patterns consistent | Design-system conformance review |
| REQ-018 | Use reproducible technical examples with documented environment assumptions | Successful execution in the supported lab environment |
| REQ-019 | Run privileged, destructive, storage, or security exercises only in suitable isolated lab environments with clear impact and recovery instructions | Lab risk review and isolation verification |
| REQ-020 | Keep credentials, tokens, and identifiable learner information out of public content and authoring inputs | Prepublication review and repository checks |
| REQ-021 | Record authoritative sources for technical claims and version-sensitive behavior, with verification evidence when checked | Source and technical-currency review |
| REQ-022 | Distinguish AI drafts, human-reviewed content, executed test evidence, and approval status | Artifact metadata and review records |
| REQ-023 | Support usable loading and code readability on typical mobile and desktop devices | Defined performance targets and measured results in later stages |
| REQ-024 | Make builds, reviews, publication, corrections, and recovery repeatable and documented | Release procedure exercised with recorded evidence |
| REQ-025 | Review asset permissions and attribution before publication | Source/asset inventory with permitted use recorded |

Specific accessibility conformance targets, performance budgets, and device coverage are design/test decisions. They are not claimed as achieved here.

## 7. Technical versions and learner environment

No Linux distribution, release, shell version, package manager, service manager, host platform, virtualization method, or website framework is selected in these requirements.

Implementation must propose a supported environment matrix listing host requirements, guest distribution/release, shell, utilities, package/service tools, installation path, isolation method, and last validation date. It must explain commands or outputs that vary across environments.

The lab environment must support the capabilities required by the lessons, including users, permissions, services, networking, storage practice, and restoration. Do not assume every container or compatibility layer supports every lab. Host-specific setup alternatives and resource requirements must be validated before publication.

Learners should not need paid cloud services for core outcomes. Any proposed paid or external service must be optional or explicitly reviewed before becoming a dependency.

## 8. Constraints, dependencies, and risks

There is no user-imposed schedule, budget, duration, or tooling constraint. Later stages should propose decisions where needed and distinguish proposals from approval. Absence of a fixed constraint does not imply unlimited learner hardware, author capacity, or spending.

Dependencies include approved curriculum and design, runnable lab environments, technical reviewers, website and video production assets, publishing access, and learner pilot participation.

| Risk | Mitigation |
|---|---|
| Beginner-to-expert scope becomes too large | Define a coherent core, incremental milestones, and explicit specialist-track boundaries |
| Commands damage a learner's host | Use isolated environments, sample data, checkpoints, and explicit recovery instructions |
| Lab behavior varies by distribution or host | Select and validate supported environments; label variations |
| AI produces plausible but incorrect material | Review sources and execute examples; use independent review without treating agreement as proof |
| Video and written content drift | Track shared lesson IDs/revisions and flag affected assets |
| Learners can follow examples but cannot work independently | Assess fresh tasks with observable success criteria and graduated hints |
| Changes invalidate technical content | Record version assumptions and maintain a technical review backlog |
| Learner feedback exposes personal data | Collect minimum necessary information and anonymize public summaries |

## 9. Success metrics

These are proposed targets or measurement plans, not observed results.

| Metric | Proposed target or decision | Measurement |
|---|---|---|
| Outcome coverage | 100% of approved outcomes mapped to lessons and independent assessments | Traceability review |
| Lab readiness | All required labs pass documented verification in supported environments before release | Execution records |
| Release quality | No unresolved release-blocking defects | Defect register and release approval |
| Independent task success | Set learner proficiency thresholds and rubric in planning | Assessment and capstone evidence |
| Learning improvement | Establish baseline and post-course measures during learner pilot | Comparable diagnostic and completion tasks |
| Learner confusion | Establish baseline before choosing reduction targets | Lesson-linked feedback and pilot observation |
| Content freshness | Define review cadence and owner roles during deployment | Review dates and maintenance backlog |
| Website/video consistency | All published videos mapped to lesson IDs and reviewed revisions | Release manifest review |

Views and completion counts may inform improvement but do not independently demonstrate proficiency. Analytics collection methods and privacy choices remain open.

## 10. Acceptance and approval

### Requirements-stage completion

- Approved brief is recorded and the document preserves its audience and scope.
- Outcomes are observable and linked to expected evidence.
- Requirements have stable IDs and acceptance evidence.
- Unselected versions and environments are explicit.
- Risks, assumptions, and decisions deferred to later stages are visible.
- Detailed requirements are reviewed before the curriculum is treated as approved.

### Eventual course release criteria

- All approved outcomes are taught and assessed.
- Required examples and labs pass in supported environments.
- Required website, accessibility, and video reviews are complete.
- Release-blocking defects are resolved and remaining limitations are documented.
- Publication is authorized and website/video links are verified.
- Release manifest and feedback route are available.

## Assumptions

- The approved brief covers a practical learning progression, not a certification syllabus.
- English is the proposed initial content language; this remains unconfirmed.
- Self-paced written lessons with associated videos are the proposed delivery model.
- Website account systems and synchronized learner progress are outside initial scope unless later approved.
- Exact duration, curriculum order, grading thresholds, technologies, and release dates will be decided in subsequent stages.

## Open questions and decision routing

| Decision | Stage |
|---|---|
| Core module sequence, advanced-track boundaries, study time, and grading rubrics | Planning |
| Teaching patterns, content schema, navigation, visual design, and accessibility targets | Design |
| Supported Linux environment, host setup paths, renderer, and execution tooling | Implementation |
| Concrete test cases, device coverage, pilot protocol, and release-blocking severity rules | Testing |
| Publishing configuration, recording approach, maintenance cadence, and release approval | Deployment |
| Feedback channels, analytics/privacy choices, and prioritization method | Feedback |

Language and delivery assumptions should be confirmed during requirements review if different from the defaults. None of these unresolved decisions is evidence of an approved implementation.

## Stage completion checklist

- [x] Course brief confirmed by the user.
- [x] Requirements draft generated from the confirmed brief.
- [x] Outcome IDs, requirement IDs, acceptance evidence, and risks defined.
- [x] Deferred decisions and unverified technical versions identified.
- [ ] Detailed requirements reviewed and approved.
- [ ] Proceed to course planning using the reviewed requirements revision.
