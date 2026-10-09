import type { Section } from '../types'

/* Authoring metadata
{
  "section": "SEC-006",
  "status": "Drafted; author checks recorded in authoring-progress.md",
  "checkedOn": "2026-10-09",
  "sources": [
    {
      "url": "https://man7.org/linux/man-pages/man1/uname.1.html",
      "supports": "GNU coreutils 9.11: kernel name and release options",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man5/os-release.5.html",
      "supports": "systemd os-release: distribution identity fields",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man1/id.1.html",
      "supports": "GNU coreutils 9.11: user/group identities",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man1/cat.1.html",
      "supports": "GNU cat displays file contents",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man7/path_resolution.7.html",
      "supports": "UID 0 and privilege qualification",
      "status": "Read 2026-10-09"
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
export const sec006: Section = {
  id: "sec-006",
  title: "Inspecting the System",
  scene: "crs-001-sec-006-scene",
  slide: "## Identify before acting\n\n```sh\nuname -s\nuname -r\ncat /etc/os-release\nid\n```\n\n- `uname`: kernel name and release; these do not identify a distribution release.\n- `/etc/os-release`: distribution identity, when available.\n- `id`: user and group identities for the current process context.\n\nInspect as an ordinary user. Investigate permission errors before requesting privilege.\n\n[uname](https://man7.org/linux/man-pages/man1/uname.1.html) \u00b7 [OS identity](https://man7.org/linux/man-pages/man5/os-release.5.html)",
  narration: "We can now ask what system Maya is actually using. The scene separates three observations: kernel, distribution, and identity. Uname dash s reports the kernel name; dash r reports its release. Those values are not the distribution's release number. On systems that provide it, the os-release file supplies distribution identification fields such as ID and VERSION_ID. Cat displays the file so we can read it without changing it. The id command reports user and group identities; this is stronger evidence than the text chosen for a prompt. The administrative account root has user ID zero, but privilege and access can involve more than one identity field or mechanism. These inspection examples do not require us to request administrative access. Outputs will vary with the installed system, so we show commands without inventing version numbers or numeric IDs. If a file or command is missing, use the documentation and investigate the environment. If access is denied, first check what you were trying to read and why. Knowing the system, identity, and location gives us the context for safe decisions.",
}
