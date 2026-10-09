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
  "pattern": "Command and result: reference comparison table",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending.",
  "compositionReview": "2026-10-09: expanded right slide with a concise existing-narration explanation; desktop/mobile fit checked. 2026-10-09: expanded focused scene with grouped context and interpretation panel; browser checks recorded in progress. 2026-10-09: compared with /Users/maddipotiganesh/graphl-workspace/linux; use grouped diagrams, code/table cards, and slide subheadings. Layout rechecked separately in progress record.",
  "mapView": {
    "master": "linux-system-map",
    "layers": [
      "distribution"
    ],
    "purpose": "Focused section view; master overview is a reference, not another curriculum level"
  }
}
*/
export const sec006: Section = {
  id: "sec-006",
  title: "Inspecting the System",
  scene: "crs-001-sec-006-scene",
  slide: "## Identify before acting\n\n**Kernel, distribution, and user identity answer different questions.**\n\n### Read the observations\n- `uname`: kernel name or release, depending on its option.\n- `/etc/os-release`: distribution identity, when available.\n- `id`: user and group identities of the current process context.\n\n### Interpret the result\nA kernel release is not a distribution release. A configurable prompt is not proof of identity.\n\nInspect as an ordinary user. Investigate missing files, missing tools, or permission errors before requesting privilege. Actual values vary by system.\n\n### Ask a precise question\nUse `uname -s` for kernel name and `uname -r` for release. Read distribution fields `ID` and `VERSION_ID` when available. Use `id` for user/groups. These inspection examples do not request administrative access or assume particular output values.\n\n[uname](https://man7.org/linux/man-pages/man1/uname.1.html) · [OS identity](https://man7.org/linux/man-pages/man5/os-release.5.html)\n\n[System map overview](#/linux-system-map) · [Readable poster](maps/linux-system-map.png)",
  narration: "We can now ask what system Maya is actually using. The scene separates three observations: kernel, distribution, and identity. Uname dash s reports the kernel name; dash r reports its release. Those values are not the distribution's release number. On systems that provide it, the os-release file supplies distribution identification fields such as ID and VERSION_ID. Cat displays the file so we can read it without changing it. The id command reports user and group identities; this is stronger evidence than the text chosen for a prompt. The administrative account root has user ID zero, but privilege and access can involve more than one identity field or mechanism. These inspection examples do not require us to request administrative access. Outputs will vary with the installed system, so we show commands without inventing version numbers or numeric IDs. If a file or command is missing, use the documentation and investigate the environment. If access is denied, first check what you were trying to read and why. Knowing the system, identity, and location gives us the context for safe decisions.",
}
