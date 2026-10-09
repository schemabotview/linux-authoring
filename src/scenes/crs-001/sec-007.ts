import type { Scene } from '@graphlearning/flow'

// Declarative relationships; the installed engine computes all positions.
export const sec007Scene: Scene = {
  "id": "crs-001-sec-007-scene",
  "flow": "TB",
  "nodes": [
    {
      "id": "context",
      "label": "Confirm context",
      "sub": "System, user, directory",
      "pattern": "service",
      "icon": "none"
    },
    {
      "id": "read",
      "label": "Read the line",
      "sub": "Command and target",
      "pattern": "service",
      "icon": "none"
    },
    {
      "id": "verify",
      "label": "Inspect the result",
      "sub": "Errors and resulting state",
      "pattern": "service",
      "icon": "none"
    }
  ],
  "edges": [
    {
      "source": "context",
      "target": "read",
      "label": "before Enter"
    },
    {
      "source": "read",
      "target": "verify",
      "label": "after command"
    }
  ]
}
