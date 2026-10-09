import type { Scene } from '@graphlearning/flow'

// Declarative relationships; the installed engine computes all positions.
export const sec002Scene: Scene = {
  "id": "crs-001-sec-002-scene",
  "flow": "TB",
  "nodes": [
    {
      "id": "host",
      "label": "Everyday host",
      "sub": "Keep valuable data here",
      "pattern": "service",
      "icon": "none"
    },
    {
      "id": "lab",
      "label": "Disposable Linux VM",
      "sub": "Proposed; setup pending",
      "pattern": "service",
      "icon": "none"
    },
    {
      "id": "checkpoint",
      "label": "Clean checkpoint",
      "sub": "Restore before reuse",
      "pattern": "service",
      "icon": "none"
    }
  ],
  "edges": [
    {
      "source": "host",
      "target": "lab",
      "label": "runs guest"
    },
    {
      "source": "lab",
      "target": "checkpoint",
      "label": "save / restore",
      "bidirectional": true
    }
  ]
}
