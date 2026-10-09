import type { Scene } from '@graphlearning/flow'

// Canonical composition; grouping and code/table cards carry meaning.
// Positions and fit are computed by the installed engine.
export const sec006Scene: Scene = {
  "id": "crs-001-sec-006-scene",
  "flow": "TB",
  "padding": 0.18,
  "nodes": [
    {
      "id": "identity",
      "label": "Inspect the system",
      "kind": "table",
      "headers": [
        "Command",
        "Identifies"
      ],
      "values": [
        [
          "uname -s",
          "Kernel name"
        ],
        [
          "uname -r",
          "Kernel release"
        ],
        [
          "cat /etc/os-release",
          "Distribution"
        ],
        [
          "id",
          "User / groups"
        ]
      ]
    },
    {
      "id": "interpret",
      "label": "Interpret before acting",
      "kind": "list",
      "framed": true,
      "pattern": "user",
      "items": [
        "Kernel ≠ distribution release",
        "Prompt ≠ proof of identity",
        "Inspect as an ordinary user",
        "Investigate permission errors"
      ]
    }
  ],
  "edges": []
}
