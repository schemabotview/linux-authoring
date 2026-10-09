import type { Scene } from '@graphlearning/flow'

// Declarative relationships; the installed engine computes all positions.
export const sec001Scene: Scene = {
  "id": "crs-001-sec-001-scene",
  "flow": "TB",
  "nodes": [
    {
      "id": "userspace",
      "label": "User space",
      "pattern": "service",
      "flow": "TB",
      "children": [
        {
          "id": "shell",
          "label": "Shell",
          "sub": "Interprets commands",
          "pattern": "service",
          "icon": "none"
        },
        {
          "id": "apps",
          "label": "Applications",
          "sub": "Editors and services",
          "pattern": "service",
          "icon": "none"
        }
      ]
    },
    {
      "id": "kernel",
      "label": "Linux kernel",
      "sub": "Resources and devices",
      "pattern": "service",
      "icon": "none"
    }
  ],
  "edges": [
    {
      "source": "userspace",
      "target": "kernel",
      "label": "requests"
    }
  ]
}
