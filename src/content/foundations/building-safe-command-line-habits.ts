import type { Section } from '../types'

/* Authoring metadata
{
  "section": "building-safe-command-line-habits",
  "status": "Drafted; author checks recorded in authoring-progress.md",
  "checkedOn": "2026-10-09",
  "sources": [
    {
      "url": "https://man7.org/linux/man-pages/man1/bash.1.html",
      "supports": "HISTORY, READLINE, EXIT STATUS: recall, editing, command results",
      "status": "Read via web; runtime not verified"
    }
  ],
  "environment": "Proposed disposable Linux VM, Bash, ordinary user; distribution/release and setup unvalidated",
  "runtime": "Pending; no isolated Linux environment available",
  "output": "Illustrative; no captured Linux output",
  "review": "Manual user review pending",
  "pattern": "Diagnostic path",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending.",
  "compositionReview": "2026-10-09: expanded right slide with a concise existing-narration explanation; desktop/mobile fit checked. 2026-10-09: expanded focused scene with grouped context and interpretation panel; browser checks recorded in progress. 2026-10-09: compared with /Users/maddipotiganesh/graphl-workspace/linux; use grouped diagrams, code/table cards, and slide subheadings. Layout rechecked separately in progress record.",
  "mapView": {
    "master": "linux-system-map",
    "layers": [
      "applications"
    ],
    "purpose": "Focused section view; master overview is a reference, not another curriculum level"
  }
}
*/
export const buildingSafeCommandLineHabits: Section = {
  id: "building-safe-command-line-habits",
  title: "Building Safe Command-Line Habits",
  scene: "foundations-building-safe-command-line-habits-scene",
  slide: "## Pause → read → verify\n\n**Before Enter, check system, user, directory, command, and target.**\n\n### Before the command\nRead the whole line, including options and shell punctuation. A command recalled from history is a draft to inspect.\n\n### After the command\nRead errors. Stop and investigate; avoid blind retries with privilege. Verify the resulting state rather than trusting silence.\n\nAfter `cd /home/maya`, use `pwd` to check location. If `cd` fails, later relative paths still use the old directory.\n\nUse disposable lab data and validated recovery.\n\n### Apply the habit\nBefore `cd /home/maya`, confirm system, user, location, and destination. After success, `pwd` checks location—not every possible action. If the move fails, pause before using relative paths. Recheck remembered commands against today’s context.",
  narration: "We began by asking what we are interacting with and how we find our way. We can now name the kernel and user-space programs, distinguish the host from a proposed lab, read a simple command, locate a directory, find help, and inspect identity. The final scene groups that knowledge into checks before Enter and checks after the command. Before submitting a line, identify the system and user, confirm the working directory, and read the command and its target. Shell punctuation matters: a line can do more than its first command name suggests. A command recalled from history is only a starting point because today's context may differ. After a command, read errors and verify the relevant state. In our navigation example, pwd checks the resulting directory; it cannot certify every possible action. If cd fails, later relative paths still use the old location. Do not turn a permission error into an automatic privileged retry. Instead, return to the documentation and the intended boundary. This is how we move from recognizing commands to making deliberate choices. The next course uses these habits to organize the team's disposable practice files. Actual lab execution and recovery validation remain pending before those examples can be treated as tested instructions.",
}
