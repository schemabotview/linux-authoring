import type { Scene } from '@graphlearning/flow'

// Declarative relationships; the installed engine computes all positions.
export const sec004Scene: Scene = {
  "id": "crs-001-sec-004-scene",
  "flow": "TB",
  "nodes": [
    {
      "id": "root",
      "label": "/",
      "sub": "Filesystem root",
      "pattern": "service",
      "icon": "none"
    },
    {
      "id": "home",
      "label": "/home",
      "sub": "Example parent",
      "pattern": "service",
      "icon": "none"
    },
    {
      "id": "maya",
      "label": "/home/maya",
      "sub": "Example home",
      "pattern": "service",
      "icon": "none"
    }
  ],
  "edges": [
    {
      "source": "root",
      "target": "home",
      "label": "contains"
    },
    {
      "source": "home",
      "target": "maya",
      "label": "contains"
    }
  ]
}
