import type { Section } from '../types'

/* Authoring metadata
{
  "section": "understanding-the-learning-environment",
  "status": "Drafted; author checks recorded in authoring-progress.md",
  "checkedOn": "2026-10-09",
  "sources": [
    {
      "url": "https://docs.kernel.org/virt/kvm/index.html",
      "supports": "Kernel virtualization documentation; supports VM concept, not a validated host setup",
      "status": "Read via web; runtime not verified"
    }
  ],
  "environment": "Proposed disposable Linux VM, Bash, ordinary user; distribution/release and setup unvalidated",
  "runtime": "Pending; no isolated Linux environment available",
  "output": "Illustrative; no captured Linux output",
  "review": "Manual user review pending",
  "pattern": "System map",
  "sourceVersions": "Bash 5.3; GNU coreutils 9.11; man-db 2.13.1; Linux man-pages 6.19; os-release systemd 262~devel. Kernel/Debian/KVM web pages rolling; less page version not pinned. These are reference versions, not a validated lab.",
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending.",
  "compositionReview": "2026-10-09: expanded right slide with a concise existing-narration explanation; desktop/mobile fit checked. 2026-10-09: expanded focused scene with grouped context and interpretation panel; browser checks recorded in progress. 2026-10-09: compared with /Users/maddipotiganesh/graphl-workspace/linux; use grouped diagrams, code/table cards, and slide subheadings. Layout rechecked separately in progress record.",
  "mapView": {
    "master": "linux-system-map",
    "layers": [
      "hardware"
    ],
    "purpose": "Focused section view; master overview is a reference, not another curriculum level"
  }
}
*/
export const understandingTheLearningEnvironment: Section = {
  id: "understanding-the-learning-environment",
  title: "Understanding the Learning Environment",
  scene: "foundations-understanding-the-learning-environment-scene",
  slide: "## Know the boundary\n\n**Host: your everyday computer. Lab: a separate learning system.**\n\n### Proposed practice system\nDisposable Linux **VM**, Bash, and ordinary user `maya` on fictional `team-lab`.\n\n### Protect the boundary\n- Keep important data and credentials outside the lab.\n- Limit shared folders and network connections.\n- Establish a clean checkpoint and test restoration before changes.\n\n**Setup pending:** distribution/release, host installation, and recovery are unvalidated. Read examples; defer execution until the lab is validated.\n\n### Read the connections\nShared folders connect guest actions to host files; networking can reach other systems. Limit both. A checkpoint is useful only when restoration is tested. Identify the starting state and return route before changing the lab.",
  narration: "The team system in our story is fictional. Your practice copy should be disposable. The scene separates the host, which is your everyday computer, from a proposed virtual machine used for learning. A virtual machine has a guest operating system, but separation is not a promise that every action is harmless: shared folders and network access can connect it to other resources. Keep those connections limited and keep valuable data out of the practice system. We propose a Linux guest with Bash and a normal user account. Before changing it, there must be a known starting state and a tested way to restore that state. A checkpoint is useful only if we know how to return to it. We have not yet validated a distribution release, host installation guide, or restoration procedure for this course. That means the following command examples are explanations to read, not a claim that setup is complete. Containers and compatibility layers may be useful, but their capabilities must be checked before treating them as substitutes for a full administration lab. With the boundary established, we can now explain the interface inside it.",
}
