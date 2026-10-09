import type { Section } from '../types'

/* Authoring metadata
{
  "section": "SEC-005",
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
  "pattern": "System map",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending."
}
*/
export const sec005: Section = {
  id: "sec-005",
  title: "Finding Help and Documentation",
  scene: "crs-001-sec-005-scene",
  slide: "## Ask the right reference\n\n```sh\nls --help\nman 1 ls\nhelp cd\n```\n\n- GNU tool help gives a quick usage summary.\n- `man 1 ls` selects the user-command manual; read **NAME**, **SYNOPSIS**, then relevant options.\n- Bash's `help cd` documents a shell builtin.\n\nIn a typical `less` pager, `/` searches and `q` quits. Pager controls vary. Missing manuals may mean documentation is not installed.\n\nUse references matching the installed tool and version. `--help` is not universal.\n\n[Manual structure](https://man7.org/linux/man-pages/man1/man.1.html)",
  narration: "When Maya wants to know what an option does, a plausible command from memory is not enough. Start with a short usage summary when the tool supports one, then read the relevant manual. The scene shows three different entry points because the source of help depends on what we are asking about. GNU ls supports dash dash help. Man one ls asks for the user-command manual in section one of the manual collection. Within it, NAME tells us what the tool does, SYNOPSIS shows the accepted form, and the option descriptions explain the details. Brackets in a synopsis usually describe optional pieces rather than text to type. Cd belongs to Bash itself, so help cd is the direct reference for that builtin. A small lab image may lack man or its documentation packages; a missing page does not prove that the command is unavailable. A typical less pager uses slash to search and q to quit, although the selected pager may differ. Match the documentation to the installed implementation before relying on an option. This gives us a way to investigate the system next.",
}
