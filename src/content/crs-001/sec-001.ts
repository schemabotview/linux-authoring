import type { Section } from '../types'

/* Authoring metadata
{
  "section": "SEC-001",
  "status": "Drafted; author checks recorded in authoring-progress.md",
  "checkedOn": "2026-10-09",
  "sources": [
    {
      "url": "https://www.kernel.org/doc/html/latest/admin-guide/README.html",
      "supports": "Linux kernel 6.x overview: resource capabilities and hardware scope",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://www.debian.org/intro/about",
      "supports": "Distribution composition; desktop, server, and embedded uses",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man1/bash.1.html",
      "supports": "DESCRIPTION: shell as command interpreter",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man2/syscalls.2.html",
      "supports": "System-call interface between applications and kernel",
      "status": "Read 2026-10-09; Linux man-pages; runtime not verified"
    }
  ],
  "environment": "Proposed disposable Linux VM, Bash, ordinary user; distribution/release and setup unvalidated",
  "runtime": "Pending; no isolated Linux environment available",
  "output": "Illustrative; no captured Linux output",
  "review": "Manual user review pending",
  "pattern": "System map",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending.",
  "compositionReview": "2026-10-09: compared with /Users/maddipotiganesh/graphl-workspace/linux; use grouped diagrams, code/table cards, and slide subheadings. Layout rechecked separately in progress record.",
  "mapView": {
    "master": "linux-system-map",
    "layers": [
      "applications",
      "distribution",
      "boundary",
      "core",
      "hardware"
    ],
    "purpose": "Focused section view; master overview is a reference, not another curriculum level"
  }
}
*/
export const sec001: Section = {
  id: "sec-001",
  title: "Understanding Linux",
  scene: "crs-001-sec-001-scene",
  slide: "## Understanding Linux\n\n**Linux is the kernel; a distribution assembles a usable system around it.**\n\n### Read the system map\n- **User space:** shells, tools, and applications.\n- **Shell:** interprets commands; applications can also run without it.\n- **Kernel:** manages resources and access to devices.\n\n### Place it in the story\nOur fictional team uses Linux to keep shared work running. These roles matter on servers, desktops, and embedded devices.\n\nA distribution supplies the kernel together with tools, libraries, and other software. Defaults vary across distributions.\n\n[Linux overview](https://www.debian.org/intro/about)\n\n[System map overview](#/linux-system-map) · [Readable poster](maps/linux-system-map.png)",
  narration: "Imagine joining a team that keeps its working files on a Linux system. Before touching those files, we need a map of what we are interacting with. The focused scene groups user programs and the kernel inside a distribution software boundary, with hardware below. It reuses the bands of our master system map. The kernel manages resources such as memory and device access; the hardware band includes physical or virtual devices. Above the kernel are programs in user space. A shell is one of those programs: it interprets the commands we type. An editor or a server program is another application, and need not receive instructions through an interactive shell. The system-call band marks how programs request kernel services. The lower relationship shows managed resource access. The companion panel connects those roles to shared resources, common interfaces, and managed access; this is an architectural view, not a boot sequence. The complete overview also names services, runtimes, and other kernel subsystems; those details belong to later sections. A distribution brings the kernel together with tools, libraries, and other software so people can install and maintain a usable system. Debian is one example; Linux distributions do not all ship the same defaults. Linux appears in servers, desktops, and embedded systems, so recognizing these roles is more useful than memorizing one screen. This course asks what we are interacting with and how we find our way. Our first step is understanding the system; our next step is separating that learning system from the computer we use every day.",
}
