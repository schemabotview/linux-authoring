import type { Scene } from '@graphlearning/flow'

// Canonical composition; grouping and code/table cards carry meaning.
// Positions and fit are computed by the installed engine.
export const sec004Scene: Scene = {
  "id": "crs-001-sec-004-scene",
  "flow": "TB",
  "padding": 0.18,
  "nodes": [
    {
      "id": "root",
      "label": "/",
      "sub": "Filesystem root",
      "pattern": "storage",
      "children": [
        {
          "id": "home",
          "label": "/home",
          "pattern": "storage",
          "children": [
            {
              "id": "maya",
              "label": "/home/maya",
              "sub": "Working directory",
              "pattern": "user",
              "icon": "folder"
            }
          ]
        }
      ]
    },
    {
      "id": "movement",
      "kind": "code",
      "filename": "Illustrative movement",
      "label": "$ cd /home/maya\n$ cd ..\n$ pwd\n/home",
      "hug": true
    }
  ],
  "edges": []
}
