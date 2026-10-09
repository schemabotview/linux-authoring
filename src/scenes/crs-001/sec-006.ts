import type { Scene } from '@graphlearning/flow'

// Declarative relationships; the installed engine computes all positions.
export const sec006Scene: Scene = {
  "id": "crs-001-sec-006-scene",
  "flow": "TB",
  "nodes": [
    {
      "id": "kernel",
      "label": "Kernel",
      "sub": "uname -s / uname -r",
      "pattern": "service",
      "icon": "terminal"
    },
    {
      "id": "distro",
      "label": "Distribution",
      "sub": "cat /etc/os-release",
      "pattern": "service",
      "icon": "terminal"
    },
    {
      "id": "identity",
      "label": "Identity",
      "sub": "id",
      "pattern": "service",
      "icon": "terminal"
    }
  ],
  "edges": []
}
