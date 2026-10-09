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
  "pattern": "System map",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending."
}
*/
export const sec003: Section = {
  id: "sec-003",
  title: "Getting Comfortable with the Terminal",
  scene: "crs-001-sec-003-scene",
  slide: "## Terminal \u2192 shell \u2192 command\n\nA **terminal** carries text input and output. The **shell** interprets what you enter.\n\nIllustrative prompt and command:\n\n```text\nmaya@team-lab:~$ ls -a\n```\n\n- Prompt: context supplied by the shell; do not type it.\n- `ls`: command name. `-a`: an option passed as an argument.\n- Enter submits the line; output appears before the next prompt.\n\nPrompt appearance varies. This example uses Bash; it does not prove the active user or host.\n\n[ls options](https://man7.org/linux/man-pages/man1/ls.1.html)",
  narration: "Inside our proposed lab, Maya opens a terminal. The terminal is the text interface; Bash is the command interpreter receiving the line. The scene follows the typed line from terminal to shell to command; the slide shows an illustrative prompt. Our prompt suggests a user called Maya on team-lab, but prompts are configurable labels, not trustworthy identity checks. Type only the command after the dollar sign. In this example ls names a program, and dash a is one argument that asks it to include entries whose names begin with a dot. Spaces separate the pieces of this simple command. Enter submits the line, and any output belongs to the command rather than to the prompt. Some commands produce no text on success, so silence alone does not tell the whole story. This is a static explanation, not a live terminal. We will use small, readable commands throughout the course and introduce more shell syntax when it becomes useful. Next we need to understand where a command looks for files.",
}
