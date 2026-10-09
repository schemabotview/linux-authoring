import type { Section } from '../types'

/* Authoring metadata
{
  "section": "finding-help-and-documentation",
  "status": "Drafted; author checks recorded in authoring-progress.md",
  "checkedOn": "2026-10-09",
  "sources": [
    {
      "url": "https://man7.org/linux/man-pages/man1/man.1.html",
      "supports": "man-db: numbered sections and manual headings",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man1/ls.1.html",
      "supports": "GNU ls --help",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man1/bash.1.html",
      "supports": "help builtin",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man1/less.1.html",
      "supports": "Search and quit controls",
      "status": "Read via web; runtime not verified"
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
      "applications"
    ],
    "purpose": "Focused section view; master overview is a reference, not another curriculum level"
  }
}
*/
export const findingHelpAndDocumentation: Section = {
  id: "finding-help-and-documentation",
  title: "Finding Help and Documentation",
  scene: "foundations-finding-help-and-documentation-scene",
  slide: "## Ask the right reference\n\n**Match the documentation to the command and installed version.**\n\n### Choose an entry point\nUse quick tool help, a numbered command manual, or Bash builtin help as shown in the scene. `--help` is not universal.\n\n### Read with a question\nStart at **NAME**, read **SYNOPSIS**, then find the relevant option. Brackets usually mark optional pieces, not text to type.\n\nIn a typical `less` pager, `/` searches and `q` quits. Pager controls vary. A missing manual may mean documentation is not installed.\n\n### Match question and source\nUse `ls --help` for GNU ls usage, `man 1 ls` for its user-command manual, and `help cd` for the Bash builtin. Read purpose, accepted form, then the relevant option. Missing documentation does not prove a command is missing.",
  narration: "When Maya wants to know what an option does, a plausible command from memory is not enough. Start with a short usage summary when the tool supports one, then read the relevant manual. The scene shows three different entry points because the source of help depends on what we are asking about. GNU ls supports dash dash help. Man one ls asks for the user-command manual in section one of the manual collection. Within it, NAME tells us what the tool does, SYNOPSIS shows the accepted form, and the option descriptions explain the details. Brackets in a synopsis usually describe optional pieces rather than text to type. Cd belongs to Bash itself, so help cd is the direct reference for that builtin. A small lab image may lack man or its documentation packages; a missing page does not prove that the command is unavailable. A typical less pager uses slash to search and q to quit, although the selected pager may differ. Match the documentation to the installed implementation before relying on an option. This gives us a way to investigate the system next.",
}
