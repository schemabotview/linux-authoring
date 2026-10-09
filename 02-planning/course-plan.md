# Linux learning path — course plan

- Topic: Linux
- Artifact version: 0.2
- Status: Draft — awaiting review
- Date: 2026-10-09
- Inputs: course-brief.md v1.0; requirements.md v1.0; user-approved planning structure from this conversation
- Planning change: courses and sections only; aim for seven courses and five to nine sections per course; omit exercise, assessment, and evidence fields
- Supersedes: course-plan.md v0.1 (24-lesson structure)

## Learning-path overview

Progress from first Linux use through command-line fluency, access management, operations, networking and storage, automation, and integrated troubleshooting. The learning path is intended for beginners progressing toward advanced practical proficiency. Continued real-world practice and specialist study are needed for expert proficiency.

Course and section counts are organizing preferences, not claims about a universal psychological limit. Earlier skills recur in later sections. Video packaging and durations will be decided during design.

| Course | Title | Sections |
|---|---|---:|
| CRS-001 | Linux Foundations and Getting Started | 7 |
| CRS-002 | Files, Text Processing, and the Shell | 7 |
| CRS-003 | Users, Permissions, and Security Fundamentals | 7 |
| CRS-004 | Software, Processes, Services, and Logs | 7 |
| CRS-005 | Networking, Remote Access, and Storage | 8 |
| CRS-006 | Shell Scripting and Automation | 7 |
| CRS-007 | Linux Administration and Troubleshooting | 7 |

**Total: seven courses and 50 sections.**

## CRS-001: Linux Foundations and Getting Started

**Purpose:** Understand Linux and become comfortable working in a safe learning environment.

**Prerequisites:** Basic computer use; no prior Linux experience.

| Section | Title | Coverage |
|---|---|---|
| SEC-001 | Understanding Linux | Explain Linux, distributions, common uses, and the relationship between the kernel, shell, and applications. |
| SEC-002 | Understanding the Learning Environment | Introduce the learner environment, host versus lab boundaries, supported setup guidance, and safe recovery habits. Exact platforms will be selected during implementation. |
| SEC-003 | Getting Comfortable with the Terminal | Introduce the terminal, shell prompt, command structure, arguments, and basic interaction. |
| SEC-004 | Navigating the Filesystem | Explain the working directory, filesystem hierarchy, absolute and relative paths, and movement between directories. |
| SEC-005 | Finding Help and Documentation | Show how to discover command usage and interpret help, manuals, and relevant documentation. |
| SEC-006 | Inspecting the System | Introduce environment identity, basic system information, and the distinction between ordinary and privileged operations. |
| SEC-007 | Building Safe Command-Line Habits | Bring together command reading, history, careful verification, error interpretation, and responsible use of the lab. |

## CRS-002: Files, Text Processing, and the Shell

**Purpose:** Use the shell to organize files and turn text into useful information.

**Prerequisites:** CRS-001.

| Section | Title | Coverage |
|---|---|---|
| SEC-008 | Creating and Managing Files | Cover creating, copying, moving, renaming, and removing files and directories using disposable sample data. |
| SEC-009 | Reading and Editing Text | Cover inspecting text files, working with a text editor, and making understandable changes to sample configuration files. |
| SEC-010 | Finding Files and Searching Content | Explain file discovery, content searching, and selecting relevant results from directory trees and text. |
| SEC-011 | Filtering and Transforming Text | Introduce selecting fields, sorting, counting, comparing, and transforming structured sample text. |
| SEC-012 | Streams and Redirection | Explain standard input, output, errors, and controlling where command data flows. |
| SEC-013 | Combining Commands with Pipelines | Show how commands cooperate in pipelines, how to inspect intermediate results, and how to recognize failures. |
| SEC-014 | Archives and Compression | Cover packaging, inspecting, extracting, and verifying archives without confusing an archive with a complete backup strategy. |

## CRS-003: Users, Permissions, and Security Fundamentals

**Purpose:** Understand identities and control access responsibly.

**Prerequisites:** CRS-001 and CRS-002.

| Section | Title | Coverage |
|---|---|---|
| SEC-015 | Linux Identities and Privilege | Explain users, identity contexts, administrative privilege, and why access boundaries matter. |
| SEC-016 | Managing Users | Introduce user accounts, account information, and responsible account lifecycle changes in the lab. |
| SEC-017 | Managing Groups | Explain group membership and using groups to organize shared access. |
| SEC-018 | Understanding File Permissions | Explain ownership and interpreting file and directory permission behavior. |
| SEC-019 | Changing Ownership and Access | Show deliberate ownership and permission changes with verification and least-privilege reasoning. |
| SEC-020 | Managing Privileged Operations | Explain controlled elevation, the impact of administrative commands, and avoiding unnecessary privilege. |
| SEC-021 | Reviewing Access and Basic Security | Combine account, group, permission, and privilege knowledge to identify common access mistakes and improve a sample system. |

## CRS-004: Software, Processes, Services, and Logs

**Purpose:** Manage installed software and investigate running system behavior.

**Prerequisites:** CRS-001 through CRS-003.

| Section | Title | Coverage |
|---|---|---|
| SEC-022 | Understanding Software Sources | Explain packages, repositories, dependencies, and trusted software sources while noting distribution differences. |
| SEC-023 | Installing and Maintaining Software | Cover inspecting, installing, updating, and removing approved lab software with state verification. |
| SEC-024 | Understanding Processes | Explain process identity, relationships, execution state, and how running programs appear to system tools. |
| SEC-025 | Controlling Processes | Cover foreground and background work, job control, signals, and responsible process termination. |
| SEC-026 | Inspecting System Resources | Introduce CPU, memory, and resource observations and distinguishing evidence from assumptions about performance. |
| SEC-027 | Managing Services | Explain service lifecycle, startup behavior, configuration changes, and checking actual service behavior in the supported environment. |
| SEC-028 | Reading Logs and Diagnosing Operational Problems | Show how to connect symptoms, service state, resource observations, and log evidence when investigating common failures. |

## CRS-005: Networking, Remote Access, and Storage

**Purpose:** Connect to Linux systems and manage sample data through its storage and recovery lifecycle.

**Prerequisites:** CRS-001 through CRS-004.

| Section | Title | Coverage |
|---|---|---|
| SEC-029 | Networking Fundamentals | Introduce addresses, interfaces, routes, ports, and the basic path between communicating systems. |
| SEC-030 | Name Resolution and Connectivity | Explain name lookup and a systematic approach to checking connectivity and locating the failing stage. |
| SEC-031 | Authorized Remote Access | Introduce remote sessions, authentication, host verification, and responsible connections between authorized lab endpoints. |
| SEC-032 | Remote File Transfer | Cover moving sample files between authorized systems and verifying transfer results. |
| SEC-033 | Understanding Storage and Filesystems | Explain storage devices, partitions at a conceptual level, filesystems, capacity, and usage inspection. |
| SEC-034 | Mounts and Disposable Storage | Show mount behavior and storage changes only within disposable lab resources, including recovery and cleanup. |
| SEC-035 | Backing Up Sample Data | Explain backup scope, destination choices, integrity checks, and producing recoverable copies of sample data. |
| SEC-036 | Restoring Data and Resolving Storage Problems | Cover verified restoration and evidence-based diagnosis of bounded capacity, mount, and access failures. |

## CRS-006: Shell Scripting and Automation

**Purpose:** Turn repeatable command-line work into understandable, reliable scripts.

**Prerequisites:** CRS-001 through CRS-005.

| Section | Title | Coverage |
|---|---|---|
| SEC-037 | From Commands to Scripts | Introduce script structure, execution, readability, and turning an understood manual workflow into a script. |
| SEC-038 | Variables, Parameters, and Quoting | Explain passing data into scripts and handling spaces, empty values, and special characters deliberately. |
| SEC-039 | Conditions and Decisions | Cover conditions and branching based on input, file state, and command outcomes. |
| SEC-040 | Loops and Repeated Work | Explain iteration over appropriate inputs while preserving correct handling of filenames and failure cases. |
| SEC-041 | Functions and Reuse | Introduce small functions, clear responsibilities, and organizing scripts without unnecessary complexity. |
| SEC-042 | Errors, Debugging, and Logging | Cover input validation, exit behavior, useful diagnostics, and debugging normal and failure paths. |
| SEC-043 | Automating Routine Administration | Combine scripting skills in repeatable reporting or sample-backup workflows, with scheduling concepts, visible results, and safe reruns. |

## CRS-007: Linux Administration and Troubleshooting

**Purpose:** Bring earlier skills together to investigate failures, recover behavior, and explain operational decisions.

**Prerequisites:** CRS-001 through CRS-006.

| Section | Title | Coverage |
|---|---|---|
| SEC-044 | A Structured Troubleshooting Method | Explain symptoms, scope, hypotheses, evidence collection, controlled changes, and verification. |
| SEC-045 | Diagnosing Access Problems | Revisit identities, groups, permissions, and remote access through coherent access-failure demonstrations. |
| SEC-046 | Diagnosing Process and Service Failures | Combine process state, service behavior, configuration, resource use, and logs to investigate operational failures. |
| SEC-047 | Diagnosing Network Problems | Apply layered reasoning to addressing, routing, name resolution, ports, and authorized remote connectivity. |
| SEC-048 | Diagnosing Storage and Recovery Problems | Bring together capacity, mounts, permissions, backups, and verified sample-data restoration. |
| SEC-049 | Reviewing Security and Operational Health | Combine least privilege, software maintenance, access review, exposure awareness, and evidence-based system checks. |
| SEC-050 | End-to-End Administration and Handoff | Demonstrate an integrated system workflow, routine automation, a bounded incident, recovery verification, and clear operational documentation. |

## Assumptions and deferred decisions

- English and self-paced written/video delivery remain working defaults.
- No specific distribution, release, host environment, renderer, or service manager is selected here. Implementation will validate support for the required demonstrations.
- Videos, durations, website presentation, and content-production details belong to subsequent stages; a section does not automatically equal one video.
- Kernel development and specialized enterprise infrastructure remain outside the core scope.
- Earlier requirements include formal practice, assessment, and evidence obligations. This plan omits those fields as explicitly requested; it does not silently cancel those course-wide requirements. Whether to remove them from the authored course entirely remains a separate decision.
- Older module/lesson identifiers are retired from this plan. New course/section IDs are stable going forward; downstream artifacts must use this revised hierarchy.

## Review status

The two-level planning structure is confirmed by the user. The seven-course curriculum and section descriptions are proposed for review. No content execution, learner testing, or technical-version verification is claimed. After plan approval, design should follow courses and sections without reintroducing additional curriculum levels.
