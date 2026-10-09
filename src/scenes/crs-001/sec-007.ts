import type { Scene } from '@graphlearning/flow'

// Canonical composition; grouping and code/table cards carry meaning.
// Positions and fit are computed by the installed engine.
export const sec007Scene: Scene = {
  "id": "crs-001-sec-007-scene",
  "flow": "TB",
  "padding": 0.18,
  "nodes": [
    {
      "id": "decision",
      "label": "Before Enter",
      "kind": "list",
      "framed": true,
      "pattern": "user",
      "items": [
        "1 · System, user, directory",
        "2 · Command, options, target"
      ]
    },
    {
      "id": "result",
      "label": "After the command",
      "kind": "list",
      "framed": true,
      "pattern": "storage",
      "items": [
        "3 · Read errors; stop on failure",
        "4 · Verify the resulting state"
      ]
    }
  ],
  "edges": [
    {
      "source": "decision",
      "target": "result",
      "label": "submit only when understood"
    }
  ]
}
