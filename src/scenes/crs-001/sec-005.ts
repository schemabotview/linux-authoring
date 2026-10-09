import type { Scene } from '@graphlearning/flow'

// Canonical composition; grouping and code/table cards carry meaning.
// Positions and fit are computed by the installed engine.
export const sec005Scene: Scene = {
  "id": "crs-001-sec-005-scene",
  "flow": "TB",
  "padding": 0.18,
  "nodes": [
    {
      "id": "help-map",
      "label": "Choose the reference",
      "kind": "table",
      "headers": [
        "Need",
        "Reference"
      ],
      "values": [
        [
          "ls options",
          "ls --help"
        ],
        [
          "ls manual",
          "man 1 ls"
        ],
        [
          "cd builtin",
          "help cd"
        ]
      ]
    },
    {
      "id": "manual",
      "label": "Read a manual page",
      "kind": "list",
      "framed": true,
      "pattern": "service",
      "items": [
        "NAME · purpose",
        "SYNOPSIS · accepted form",
        "OPTIONS · option meanings",
        "[ ] · usually optional parts"
      ]
    }
  ],
  "edges": []
}
