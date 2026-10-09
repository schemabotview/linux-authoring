import type { Scene } from '@graphlearning/flow'

// Canonical composition; grouping and code/table cards carry meaning.
// Positions and fit are computed by the installed engine.
export const sec001Scene: Scene = {
  "id": "crs-001-sec-001-scene",
  "flow": "TB",
  "padding": 0.18,
  "nodes": [
    {
      "id": "distribution",
      "label": "Linux distribution",
      "pattern": "group",
      "children": [
        {
          "id": "userspace",
          "label": "User space",
          "pattern": "user",
          "children": [
            {
              "id": "shell",
              "label": "Shell",
              "sub": "Interprets commands",
              "pattern": "user",
              "icon": "terminal"
            },
            {
              "id": "apps",
              "label": "Applications",
              "sub": "Editors and services",
              "pattern": "user",
              "icon": "appwindow"
            }
          ]
        },
        {
          "id": "kernel",
          "label": "Linux kernel",
          "sub": "Memory and device access",
          "pattern": "service",
          "icon": "cpu"
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
  ],
  "edges": []
}
