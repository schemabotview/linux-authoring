import type { Scene } from '@graphlearning/flow'

// Canonical composition; grouping and code/table cards carry meaning.
// Positions and fit are computed by the installed engine.
export const sec002Scene: Scene = {
  "id": "crs-001-sec-002-scene",
  "flow": "TB",
  "padding": 0.18,
  "nodes": [
    {
      "id": "host",
      "label": "Everyday host",
      "pattern": "group",
      "children": [
        {
          "id": "host-data",
          "label": "Important host data",
          "sub": "Keep outside the practice system",
          "pattern": "storage",
          "icon": "folder"
        },
        {
          "id": "lab",
          "label": "Linux VM · proposed",
          "pattern": "service",
          "children": [
            {
              "id": "identity",
              "label": "Ordinary user: maya",
              "sub": "Practice home: /home/maya",
              "pattern": "user",
              "icon": "user"
            },
            {
              "id": "checkpoint",
              "label": "Clean checkpoint",
              "sub": "Test restoration before changes",
              "pattern": "storage",
              "icon": "history"
            }
          ]
        }
      ],
      "edges": [
        {
          "source": "host-data",
          "target": "lab",
          "label": "avoid sharing",
          "dashed": true
        }
      ]
    }
  ],
  "edges": []
}
