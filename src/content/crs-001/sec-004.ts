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
  "pattern": "Hierarchy",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending."
}
*/
export const sec004: Section = {
  id: "sec-004",
  title: "Navigating the Filesystem",
  scene: "crs-001-sec-004-scene",
  slide: "## Where am I looking?\n\n- `/` is the root of the filesystem tree.\n- An **absolute path** starts at `/`; a **relative path** starts at the working directory.\n- `.` names the current directory; `..` names its parent.\n\nIllustrative Bash sequence; `/home/maya` must exist:\n\n```sh\npwd\ncd /home/maya\ncd ..\npwd\n```\n\nAfter both changes succeed, `pwd` reports `/home`. Files stay in place.\n\n[pwd reference](https://man7.org/linux/man-pages/man1/pwd.1.html)",
  narration: "The team files live somewhere in a directory tree, so our next question is location. The scene shows a small example tree, not every directory on a Linux machine. Slash is its root. Under home is Maya's example home directory. An absolute path gives a route from the root, such as slash home slash maya. A relative path starts from the current working directory, so the same relative name can refer to different places after we move. In the displayed sequence, pwd reports where the shell is working. The first cd names an absolute destination. The next cd uses dot dot to move to its parent. If both commands succeed, the final pwd reports slash home. Read any error before assuming the location changed. Dot means the current directory. Changing directories changes the shell's context, not the location of the files themselves. The root directory is also different from the administrative account named root. Now that we can name a place, we can look up commands without guessing their meaning.",
}
