import type { Section } from '../types'

/* Authoring metadata
{
  "section": "SEC-003",
  "status": "Drafted; author checks recorded in authoring-progress.md",
  "checkedOn": "2026-10-09",
  "sources": [
    {
      "url": "https://man7.org/linux/man-pages/man1/bash.1.html",
      "supports": "DESCRIPTION, SIMPLE COMMANDS, PROMPTING: interpreter, arguments, configurable prompt",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man1/ls.1.html",
      "supports": "GNU coreutils 9.11: -a includes dot entries",
      "status": "Read via web; runtime not verified"
    }
  ],
  "environment": "Proposed disposable Linux VM, Bash, ordinary user; distribution/release and setup unvalidated",
  "runtime": "Pending; no isolated Linux environment available",
  "output": "Illustrative; no captured Linux output",
  "review": "Manual user review pending",
  "pattern": "Command and result",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending.",
  "compositionReview": "2026-10-09: expanded focused scene with grouped context and interpretation panel; browser checks recorded in progress. 2026-10-09: compared with /Users/maddipotiganesh/graphl-workspace/linux; use grouped diagrams, code/table cards, and slide subheadings. Layout rechecked separately in progress record.",
  "mapView": {
    "master": "linux-system-map",
    "layers": [
      "applications"
    ],
    "purpose": "Focused section view; master overview is a reference, not another curriculum level"
  }
}
*/
export const sec003: Section = {
  id: "sec-003",
  title: "Getting Comfortable with the Terminal",
  scene: "crs-001-sec-003-scene",
  slide: "## Terminal → shell → command\n\n**The terminal carries text. The shell interprets the line.**\n\n### Read the scene\n- **Prompt:** context chosen by the shell; do not type it.\n- **Command:** `ls` names the program.\n- **Argument:** `-a` asks GNU ls to include dot entries.\n- **Result:** illustrative directory entries, then a new prompt.\n\n### Before Enter\nType only `ls -a`. Enter submits the line. Prompt appearance varies and does not prove identity.\n\nA command can succeed without producing text; inspect the relevant state.\n\n[ls options](https://man7.org/linux/man-pages/man1/ls.1.html)\n\n[System map overview](#/linux-system-map) · [Readable poster](maps/linux-system-map.png)",
  narration: "Inside our proposed lab, Maya opens a terminal. The terminal is the text interface; Bash is the command interpreter receiving the line. The scene pairs an illustrative terminal interaction with a breakdown of the prompt, command, and result. Our prompt suggests a user called Maya on team-lab, but prompts are configurable labels, not trustworthy identity checks. Type only the command after the dollar sign. In this example ls names a program, and dash a is one argument that asks it to include entries whose names begin with a dot. The sample listing shows only dot and dot dot in an otherwise empty directory; it is illustrative, and actual home directories usually contain more entries. Spaces separate the pieces of this simple command. Enter submits the line, and any output belongs to the command rather than to the prompt. Some commands produce no text on success, so silence alone does not tell the whole story. This is a static explanation, not a live terminal. We will use small, readable commands throughout the course and introduce more shell syntax when it becomes useful. Next we need to understand where a command looks for files.",
}
