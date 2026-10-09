import type { Scene } from '@graphlearning/flow'

// Declarative relationships; the installed engine computes all positions.
export const sec003Scene: Scene = {
  "id": "crs-001-sec-003-scene",
  "flow": "TB",
  "nodes": [
    {
      "id": "terminal",
      "label": "Terminal",
      "sub": "Text input and output",
      "pattern": "service",
      "icon": "terminal"
    },
    {
      "id": "shell",
      "label": "Bash shell",
      "sub": "Interprets the line",
      "pattern": "service",
      "icon": "terminal"
    },
    {
      "id": "command",
      "label": "ls -a",
      "sub": "List entries, including dot names",
      "pattern": "service",
      "icon": "terminal"
    }
  ],
  "edges": [
    {
      "source": "terminal",
      "target": "shell",
      "label": "typed line"
    },
    {
      "source": "shell",
      "target": "command",
      "label": "runs command"
    }
  ]
}
