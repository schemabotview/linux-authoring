import type { Scene } from '@graphlearning/flow'

// Declarative relationships; the installed engine computes all positions.
export const sec005Scene: Scene = {
  "id": "crs-001-sec-005-scene",
  "flow": "TB",
  "nodes": [
    {
      "id": "quick",
      "label": "ls --help",
      "sub": "Quick usage",
      "pattern": "service",
      "icon": "terminal"
    },
    {
      "id": "manual",
      "label": "man 1 ls",
      "sub": "Command manual",
      "pattern": "service",
      "icon": "terminal"
    },
    {
      "id": "builtin",
      "label": "help cd",
      "sub": "Bash builtin help",
      "pattern": "service",
      "icon": "terminal"
    }
  ],
  "edges": []
}
