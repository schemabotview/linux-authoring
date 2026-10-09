# Linux learning path — course plan

- Topic: Linux
- Artifact version: 0.3
- Status: Draft — awaiting review
- Date: 2026-10-09
- Inputs: course-brief.md v1.0; requirements.md v1.0; user-approved planning structure from this conversation
- Planning change: courses and sections only; aim for seven courses and five to nine sections per course; omit exercise, assessment, and evidence fields
- Supersedes: course-plan.md v0.2; preserves CRS-001–007 and SEC-001–050

## Learning-path spine

**Central question:** How do I understand, control, automate, and troubleshoot a Linux system?

**Connecting story:** Follow a small Linux system used by a team. Begin by exploring it; organize its files; establish access boundaries; operate its software; connect it and preserve its data; automate routine work; then diagnose failures and explain recovery. The team and sample data are fictional. This is a recurring demonstration context, not an additional project or assessment requirement.

**Progression:** Orient → work with data → control access → run software → connect and preserve → automate → diagnose and recover.

This narrative is our proposed teaching design, not an externally validated seven-course model. The rationale is to keep explanations aligned with the learning destination, consistent with [CMU alignment guidance](https://www.cmu.edu/teaching/assessment/basics/alignment.html). That guidance also addresses assessment; citing it here does not reintroduce assessment fields or establish that this plan has been evaluated.

For scope comparison, [Linux Foundation LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/) includes command-line work, documentation, processes, files, text, networking, scripting, and local security. Our path emphasizes command-line administration, storage recovery, and integrated troubleshooting; it does not reproduce LFS101's graphical desktop and printing coverage. This is a limited outline comparison, not an endorsement or certification mapping.

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

**Driving question:** What am I interacting with, and how do I find my way?

**Spine connection:** Understand the system in the evolving team-system story.

**Destination:** Explain the environment and navigate it using help and safe habits.

**Sequence rationale:** Establish context and lab boundaries before terminal use, navigation, documentation, inspection, and safe operation.

**Prerequisites:** Basic computer use; no prior Linux experience.

| Section | Title | Coverage and connection | References |
|---|---|---|---|
| SEC-001 | Understanding Linux | Explain Linux, distributions, common uses, and the relationship between the kernel, shell, and applications. Introduce the system before manipulating it. | [LFS101 outline](https://training.linuxfoundation.org/training/introduction-to-linux/) |
| SEC-002 | Understanding the Learning Environment | Introduce the learner environment, host versus lab boundaries, supported setup guidance, and safe recovery habits. Exact platforms will be selected during implementation. Establish safe boundaries before commands change state. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-003 | Getting Comfortable with the Terminal | Introduce the terminal, shell prompt, command structure, arguments, and basic interaction. Provide the interface used throughout the story. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-004 | Navigating the Filesystem | Explain the working directory, filesystem hierarchy, absolute and relative paths, and movement between directories. Locate team resources through that interface. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-005 | Finding Help and Documentation | Show how to discover command usage and interpret help, manuals, and relevant documentation. Enable independent discovery once navigation is familiar. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-006 | Inspecting the System | Introduce environment identity, basic system information, and the distinction between ordinary and privileged operations. Use navigation and help to identify the system. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-007 | Building Safe Command-Line Habits | Bring together command reading, history, careful verification, error interpretation, and responsible use of the lab. Consolidate safe habits before working with team files. | [Bash manual](https://www.gnu.org/software/bash/manual/) |

## CRS-002: Files, Text Processing, and the Shell

**Purpose:** Use the shell to organize files and turn text into useful information.

**Driving question:** How do I organize and extract useful information?

**Spine connection:** Work with its data in the evolving team-system story.

**Destination:** Manage team files and construct understandable text-processing workflows.

**Sequence rationale:** Begin with files and editing, then discovery and transformation, then streams and pipelines, and finally portable archives.

**Prerequisites:** CRS-001.

| Section | Title | Coverage and connection | References |
|---|---|---|---|
| SEC-008 | Creating and Managing Files | Cover creating, copying, moving, renaming, and removing files and directories using disposable sample data. Create the working data for the story. | [Coreutils manual](https://www.gnu.org/software/coreutils/manual/) |
| SEC-009 | Reading and Editing Text | Cover inspecting text files, working with a text editor, and making understandable changes to sample configuration files. Make the working data readable and editable. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-010 | Finding Files and Searching Content | Explain file discovery, content searching, and selecting relevant results from directory trees and text. Locate relevant material before processing it. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-011 | Filtering and Transforming Text | Introduce selecting fields, sorting, counting, comparing, and transforming structured sample text. Turn located material into useful summaries. | [Coreutils manual](https://www.gnu.org/software/coreutils/manual/) |
| SEC-012 | Streams and Redirection | Explain standard input, output, errors, and controlling where command data flows. Explain data flow before combining commands. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-013 | Combining Commands with Pipelines | Show how commands cooperate in pipelines, how to inspect intermediate results, and how to recognize failures. Combine earlier transformations into workflows. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-014 | Archives and Compression | Cover packaging, inspecting, extracting, and verifying archives without confusing an archive with a complete backup strategy. Package the files and results for later transfer and recovery. | [GNU tar manual](https://www.gnu.org/software/tar/manual/) |

## CRS-003: Users, Permissions, and Security Fundamentals

**Purpose:** Understand identities and control access responsibly.

**Driving question:** Who can do what, and why?

**Spine connection:** Establish access boundaries in the evolving team-system story.

**Destination:** Explain and deliberately control access to team resources.

**Sequence rationale:** Move from identity to accounts and groups, then permission interpretation and changes, then privilege and integrated access review.

**Prerequisites:** CRS-001 and CRS-002.

| Section | Title | Coverage and connection | References |
|---|---|---|---|
| SEC-015 | Linux Identities and Privilege | Explain users, identity contexts, administrative privilege, and why access boundaries matter. Establish who is acting on the team system. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-016 | Managing Users | Introduce user accounts, account information, and responsible account lifecycle changes in the lab. Give team members distinct identities. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-017 | Managing Groups | Explain group membership and using groups to organize shared access. Organize those identities for shared work. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-018 | Understanding File Permissions | Explain ownership and interpreting file and directory permission behavior. Explain access rules before changing them. | [Coreutils manual](https://www.gnu.org/software/coreutils/manual/) |
| SEC-019 | Changing Ownership and Access | Show deliberate ownership and permission changes with verification and least-privilege reasoning. Apply those rules to the shared files. | [Coreutils manual](https://www.gnu.org/software/coreutils/manual/) |
| SEC-020 | Managing Privileged Operations | Explain controlled elevation, the impact of administrative commands, and avoiding unnecessary privilege. Bound administrative changes to the system. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-021 | Reviewing Access and Basic Security | Combine account, group, permission, and privilege knowledge to identify common access mistakes and improve a sample system. Combine identity and file knowledge into access review. | [Manual-page collection](https://man7.org/linux/man-pages/) |

## CRS-004: Software, Processes, Services, and Logs

**Purpose:** Manage installed software and investigate running system behavior.

**Driving question:** How does software run, and how do I observe it?

**Spine connection:** Operate the system in the evolving team-system story.

**Destination:** Manage software and interpret process, service, resource, and log behavior.

**Sequence rationale:** Establish trusted software sources before changes; understand processes before control and resource inspection; combine these observations in services and logs.

**Prerequisites:** CRS-001 through CRS-003.

| Section | Title | Coverage and connection | References |
|---|---|---|---|
| SEC-022 | Understanding Software Sources | Explain packages, repositories, dependencies, and trusted software sources while noting distribution differences. Establish trust before installing team software. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-023 | Installing and Maintaining Software | Cover inspecting, installing, updating, and removing approved lab software with state verification. Manage software from those sources. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-024 | Understanding Processes | Explain process identity, relationships, execution state, and how running programs appear to system tools. Observe the programs installed earlier as running work. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-025 | Controlling Processes | Cover foreground and background work, job control, signals, and responsible process termination. Control that work deliberately. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-026 | Inspecting System Resources | Introduce CPU, memory, and resource observations and distinguishing evidence from assumptions about performance. Inspect the resources used by running work. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-027 | Managing Services | Explain service lifecycle, startup behavior, configuration changes, and checking actual service behavior in the supported environment. Organize long-running work as managed services. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-028 | Reading Logs and Diagnosing Operational Problems | Show how to connect symptoms, service state, resource observations, and log evidence when investigating common failures. Use logs to explain the behavior of those services. | [Manual-page collection](https://man7.org/linux/man-pages/) |

## CRS-005: Networking, Remote Access, and Storage

**Purpose:** Connect to Linux systems and manage sample data through its storage and recovery lifecycle.

**Driving question:** How does the system communicate and preserve data?

**Spine connection:** Connect and protect it in the evolving team-system story.

**Destination:** Access the team system remotely and preserve recoverable sample data.

**Sequence rationale:** Establish network behavior before remote access and transfer; then explain where transferred data lives, storage attachment, backups, and verified restoration.

**Prerequisites:** CRS-001 through CRS-004.

| Section | Title | Coverage and connection | References |
|---|---|---|---|
| SEC-029 | Networking Fundamentals | Introduce addresses, interfaces, routes, ports, and the basic path between communicating systems. Explain how the team reaches the system. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-030 | Name Resolution and Connectivity | Explain name lookup and a systematic approach to checking connectivity and locating the failing stage. Locate connectivity failures before adding remote sessions. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-031 | Authorized Remote Access | Introduce remote sessions, authentication, host verification, and responsible connections between authorized lab endpoints. Use known network paths for authorized access. | [OpenSSH manuals](https://www.openssh.org/manual.html) |
| SEC-032 | Remote File Transfer | Cover moving sample files between authorized systems and verifying transfer results. Move the team files over those connections. | [OpenSSH manuals](https://www.openssh.org/manual.html) |
| SEC-033 | Understanding Storage and Filesystems | Explain storage devices, partitions at a conceptual level, filesystems, capacity, and usage inspection. Explain where transferred data resides. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-034 | Mounts and Disposable Storage | Show mount behavior and storage changes only within disposable lab resources, including recovery and cleanup. Attach disposable storage after understanding its role. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-035 | Backing Up Sample Data | Explain backup scope, destination choices, integrity checks, and producing recoverable copies of sample data. Preserve copies of the stored team data. | [GNU tar manual](https://www.gnu.org/software/tar/manual/) |
| SEC-036 | Restoring Data and Resolving Storage Problems | Cover verified restoration and evidence-based diagnosis of bounded capacity, mount, and access failures. Complete preservation by demonstrating restoration. | [GNU tar manual](https://www.gnu.org/software/tar/manual/) |

## CRS-006: Shell Scripting and Automation

**Purpose:** Turn repeatable command-line work into understandable, reliable scripts.

**Driving question:** Which repeated operations can I automate reliably?

**Spine connection:** Reduce manual work in the evolving team-system story.

**Destination:** Turn previously understood team operations into readable scripts with deliberate failure behavior.

**Sequence rationale:** Start with scripts and data handling; introduce decisions, repetition, and functions; add diagnostics before integrating routine automation.

**Prerequisites:** CRS-001 through CRS-005.

| Section | Title | Coverage and connection | References |
|---|---|---|---|
| SEC-037 | From Commands to Scripts | Introduce script structure, execution, readability, and turning an understood manual workflow into a script. Automate an operation already understood manually. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-038 | Variables, Parameters, and Quoting | Explain passing data into scripts and handling spaces, empty values, and special characters deliberately. Make the operation accept changing team inputs. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-039 | Conditions and Decisions | Cover conditions and branching based on input, file state, and command outcomes. Respond to different input and system states. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-040 | Loops and Repeated Work | Explain iteration over appropriate inputs while preserving correct handling of filenames and failure cases. Repeat the operation across relevant inputs. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-041 | Functions and Reuse | Introduce small functions, clear responsibilities, and organizing scripts without unnecessary complexity. Organize repeated script behavior for reuse. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-042 | Errors, Debugging, and Logging | Cover input validation, exit behavior, useful diagnostics, and debugging normal and failure paths. Make failures visible before relying on automation. | [Bash manual](https://www.gnu.org/software/bash/manual/) |
| SEC-043 | Automating Routine Administration | Combine scripting skills in repeatable reporting or sample-backup workflows, with scheduling concepts, visible results, and safe reruns. Combine earlier script features into routine operations. | [Bash manual](https://www.gnu.org/software/bash/manual/) |

## CRS-007: Linux Administration and Troubleshooting

**Purpose:** Bring earlier skills together to investigate failures, recover behavior, and explain operational decisions.

**Driving question:** How do I explain a failure and restore correct behavior?

**Spine connection:** Bring the knowledge together in the evolving team-system story.

**Destination:** Investigate bounded incidents and explain verified recovery and operational handoff.

**Sequence rationale:** Introduce a diagnostic method, apply it to earlier access, service, network, and storage concerns, then integrate health review and an end-to-end handoff.

**Prerequisites:** CRS-001 through CRS-006.

| Section | Title | Coverage and connection | References |
|---|---|---|---|
| SEC-044 | A Structured Troubleshooting Method | Explain symptoms, scope, hypotheses, evidence collection, controlled changes, and verification. Establish a common method before diagnosing incidents. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-045 | Diagnosing Access Problems | Revisit identities, groups, permissions, and remote access through coherent access-failure demonstrations. Revisit team access using the diagnostic method. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-046 | Diagnosing Process and Service Failures | Combine process state, service behavior, configuration, resource use, and logs to investigate operational failures. Apply the same method to running software. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-047 | Diagnosing Network Problems | Apply layered reasoning to addressing, routing, name resolution, ports, and authorized remote connectivity. Extend diagnosis to remote communication. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-048 | Diagnosing Storage and Recovery Problems | Bring together capacity, mounts, permissions, backups, and verified sample-data restoration. Extend diagnosis to stored data and recovery. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-049 | Reviewing Security and Operational Health | Combine least privilege, software maintenance, access review, exposure awareness, and evidence-based system checks. Combine findings into a broader operational review. | [Manual-page collection](https://man7.org/linux/man-pages/) |
| SEC-050 | End-to-End Administration and Handoff | Demonstrate an integrated system workflow, routine automation, a bounded incident, recovery verification, and clear operational documentation. Connect the entire story through recovery and handoff. | [Manual-page collection](https://man7.org/linux/man-pages/) |

## Reference register and trust boundaries

| Source | Role and scope | Verification status |
|---|---|---|
| [CMU alignment guidance](https://www.cmu.edu/teaching/assessment/basics/alignment.html) | Educational rationale for aligned goals and instruction; does not validate our exact sequence | Page retrieved 2026-10-09 |
| [Linux Foundation LFS101](https://training.linuxfoundation.org/training/introduction-to-linux/) | Introductory curriculum outline comparison described above | Public outline reviewed 2026-10-09 |
| [Linux manual-page collection](https://man7.org/linux/man-pages/) | Starting index for identity, processes, filesystems, networking, and administration; includes pages from multiple upstream projects | Index retrieved 2026-10-09; individual command pages must be selected and checked during authoring |
| [OpenSSH manuals](https://www.openssh.org/manual.html) | Upstream starting index for remote access and file transfer | Index retrieved 2026-10-09; select Linux implementation/version-specific pages during authoring |
| [Bash manual](https://www.gnu.org/software/bash/manual/) | Upstream starting reference for shell interaction, streams, job control, and scripting | Previously identified; retrieval timed out in this revision; specific passages/version need verification |
| [Coreutils manual](https://www.gnu.org/software/coreutils/manual/) | Upstream starting reference for file operations, permissions, and supported text utilities | Retrieval timed out; specific passages/version need verification |
| [GNU tar manual](https://www.gnu.org/software/tar/manual/) | Upstream starting reference for archive operations used within the backup story | Retrieval failed; specific passages/version need verification |

Section links are starting references, not claim-by-claim verification. During authoring, replace broad indexes with relevant manual chapters or pages, record supported versions, and cite claims close to their explanations. Some commands come from separate projects; use their own upstream manuals. Package management, service management, setup, and editor instructions require selected-distribution/tool documentation after implementation choices are made. No distribution-specific source is silently assumed here.

References establish inspectable sources. Runtime correctness still requires executing examples in the selected environment and recording results during implementation/testing. No learner results, tested commands, source endorsement, or comprehensive technical validation are claimed by this plan.

## Assumptions and deferred decisions

- English and self-paced written/video delivery remain working defaults.
- No specific distribution, release, host environment, renderer, or service manager is selected here. Implementation will validate support for the required demonstrations.
- Videos, durations, website presentation, and content-production details belong to subsequent stages; a section does not automatically equal one video.
- Kernel development and specialized enterprise infrastructure remain outside the core scope.
- Earlier requirements include formal practice, assessment, and evidence obligations. This plan omits those fields as explicitly requested; it does not silently cancel those course-wide requirements. Whether to remove them from the authored course entirely remains a separate decision.
- Older module/lesson identifiers are retired from this plan. New course/section IDs are stable going forward; downstream artifacts must use this revised hierarchy.

## Review status

The two-level planning structure is confirmed by the user. The seven-course curriculum and section descriptions are proposed for review. No content execution, learner testing, or technical-version verification is claimed. After plan approval, design should follow courses and sections without reintroducing additional curriculum levels.
