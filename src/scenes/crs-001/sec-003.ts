import type { Scene } from '@graphlearning/flow'

// Canonical composition; grouping and code/table cards carry meaning.
// Positions and fit are computed by the installed engine.
export const sec003Scene: Scene = {
  "id": "crs-001-sec-003-scene",
  "flow": "TB",
  "padding": 0.18,
  "nodes": [
    {
      "id": "terminal",
      "kind": "code",
      "filename": "Illustrative session",
      "label": "maya@team-lab:~$ ls -a\n.  ..\nmaya@team-lab:~$",
      "hug": true
    },
    {
      "id": "read-line",
      "label": "Read the interaction",
      "kind": "list",
      "framed": true,
      "pattern": "user",
      "items": [
        "Prompt · do not type it",
        "ls · command name",
        "-a · option argument",
        "Result · entries, then prompt"
      ]
    }
  ],
  "edges": []
}
