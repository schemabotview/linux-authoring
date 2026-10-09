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
    }
  ],
  "environment": "Proposed disposable Linux VM, Bash, ordinary user; distribution/release and setup unvalidated",
  "runtime": "Pending; no isolated Linux environment available",
  "output": "Illustrative; no captured Linux output",
  "review": "Manual user review pending",
  "pattern": "System map",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending."
}
*/
export const sec001: Section = {
  id: "sec-001",
  title: "Understanding Linux",
  scene: "crs-001-sec-001-scene",
  slide: "## Understanding Linux\n\n**Linux is the kernel; a distribution makes a usable system around it.**\n\n- The **kernel** manages resources and access to devices.\n- **User space** contains shells, tools, and applications.\n- A **shell** interprets commands; applications can also run without it.\n- A **distribution** supplies an integrated collection of software.\n\nOur fictional team uses Linux to keep shared work running. The same foundations matter on servers, desktops, and embedded devices.\n\n[Linux overview](https://www.debian.org/intro/about)",
  narration: "Imagine joining a team that keeps its working files on a Linux system. Before touching those files, we need a map of what we are interacting with. At the bottom of the scene, the kernel manages resources such as memory and device access. Above it are programs in user space. A shell is one of those programs: it interprets the commands we type. An editor or a server program is another application, and need not receive instructions through an interactive shell. The arrows show requests toward the kernel, not a boot sequence. A distribution brings the kernel together with tools, libraries, and other software so people can install and maintain a usable system. Debian is one example; Linux distributions do not all ship the same defaults. Linux appears in servers, desktops, and embedded systems, so recognizing these roles is more useful than memorizing one screen. This course asks what we are interacting with and how we find our way. Our first step is understanding the system; our next step is separating that learning system from the computer we use every day.",
}
