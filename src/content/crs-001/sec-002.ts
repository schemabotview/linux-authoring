import type { Section } from '../types'

/* Authoring metadata
{
  "section": "SEC-002",
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
  "limitations": "Linux execution, setup/recovery validation, user review, comprehensive accessibility checks pending."
}
*/
export const sec002: Section = {
  id: "sec-002",
  title: "Understanding the Learning Environment",
  scene: "crs-001-sec-002-scene",
  slide: "## Know the boundary\n\n**Your host is your everyday computer. The lab is a separate learning system.**\n\n- Proposed baseline: a disposable Linux **virtual machine**, Bash, and an ordinary user.\n- Keep host folders, credentials, and important data outside the lab.\n- Before changes, establish a clean checkpoint and a way to restore it.\n- A VM can still reach shared folders and networks when configured to do so.\n\n**Setup validation pending:** no distribution/release, host-specific installation route, or recovery procedure is verified yet. Read the examples; defer execution until the lab is validated.\n\n[Virtual machines](https://docs.kernel.org/virt/kvm/index.html)",
  narration: "The team system in our story is fictional. Your practice copy should be disposable. The scene separates the host, which is your everyday computer, from a proposed virtual machine used for learning. A virtual machine has a guest operating system, but separation is not a promise that every action is harmless: shared folders and network access can connect it to other resources. Keep those connections limited and keep valuable data out of the practice system. We propose a Linux guest with Bash and a normal user account. Before changing it, there must be a known starting state and a tested way to restore that state. A checkpoint is useful only if we know how to return to it. We have not yet validated a distribution release, host installation guide, or restoration procedure for this course. That means the following command examples are explanations to read, not a claim that setup is complete. Containers and compatibility layers may be useful, but their capabilities must be checked before treating them as substitutes for a full administration lab. With the boundary established, we can now explain the interface inside it.",
}
