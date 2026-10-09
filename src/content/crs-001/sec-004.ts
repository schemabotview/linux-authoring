import type { Section } from '../types'

/* Authoring metadata
{
  "section": "SEC-004",
  "status": "Drafted; author checks recorded in authoring-progress.md",
  "checkedOn": "2026-10-09",
  "sources": [
    {
      "url": "https://man7.org/linux/man-pages/man1/bash.1.html",
      "supports": "SHELL BUILTIN COMMANDS: cd, pwd; EXPANSION: paths",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man1/pwd.1.html",
      "supports": "GNU coreutils 9.11: print working directory",
      "status": "Read via web; runtime not verified"
    },
    {
      "url": "https://man7.org/linux/man-pages/man7/path_resolution.7.html",
      "supports": "Absolute/relative paths and dot components",
      "status": "Read via web; runtime not verified"
    }
  ],
  "environment": "Proposed disposable Linux VM, Bash, ordinary user; distribution/release and setup unvalidated",
  "runtime": "Pending; no isolated Linux environment available",
  "output": "Illustrative; no captured Linux output",
  "review": "Manual user review pending",
  "pattern": "Hierarchy with command and result",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending.",
  "compositionReview": "2026-10-09: expanded right slide with a concise existing-narration explanation; desktop/mobile fit checked. 2026-10-09: expanded focused scene with grouped context and interpretation panel; browser checks recorded in progress. 2026-10-09: compared with /Users/maddipotiganesh/graphl-workspace/linux; use grouped diagrams, code/table cards, and slide subheadings. Layout rechecked separately in progress record.",
  "mapView": {
    "master": "linux-system-map",
    "layers": [
      "applications",
      "io"
    ],
    "purpose": "Focused section view; master overview is a reference, not another curriculum level"
  }
}
*/
export const sec004: Section = {
  id: "sec-004",
  title: "Navigating the Filesystem",
  scene: "crs-001-sec-004-scene",
  slide: "## Where am I looking?\n\n**A path names a place; the working directory supplies context.**\n\n### Read the tree\n- `/` is the filesystem root.\n- **Absolute:** `/home/maya` starts at `/`.\n- **Relative:** `..` starts here and names the parent.\n- `.` names the current directory.\n\n### Follow the movement\nIn the illustrative scene, both changes succeed and `pwd` reports `/home`. The directory `/home/maya` must already exist.\n\n`cd` changes the shell’s context. Files stay in place. Read errors before assuming the directory changed.\n\n### Keep the context straight\nFrom `/home/maya`, `..` names `/home`. After a successful move, relative names use the new location. If `cd` fails, the old location remains. The root directory `/` differs from the administrative account named `root`.",
  narration: "The team files live somewhere in a directory tree, so our next question is location. The scene connects the user-space shell to the filesystem band of the master map. Inside that band is a small example tree, not every directory on a Linux machine. Slash is its root. Under home is Maya's example home directory. An absolute path gives a route from the root, such as slash home slash maya. A relative path starts from the current working directory, so the same relative name can refer to different places after we move. The code card shows commands after a dollar sign and the resulting directory on its final line. The first cd names an absolute destination. The next cd uses dot dot to move to its parent. If both commands succeed, the final pwd reports slash home. Read any error before assuming the location changed. Dot means the current directory. Changing directories changes the shell's context, not the location of the files themselves. The root directory is also different from the administrative account named root. Now that we can name a place, we can look up commands without guessing their meaning.",
}
