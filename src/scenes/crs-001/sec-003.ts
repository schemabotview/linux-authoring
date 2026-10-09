import type { Scene } from '@graphlearning/flow'
import { mapBand } from '../system-map'

// Focused view of the shared master map; only this section’s detail is expanded.
export const sec003Scene: Scene = {
  id: 'crs-001-sec-003-scene',
  padding: 0.18,
  flow: 'TB',
  nodes: [mapBand('applications', [{"id": "terminal", "kind": "code", "filename": "Illustrative session", "label": "maya@team-lab:~$ ls -a\n.  ..\nmaya@team-lab:~$", "hug": true}, {"id": "read-line", "label": "Read the interaction", "kind": "list", "framed": true, "pattern": "user", "items": ["Prompt · do not type it", "ls · command name", "-a · option argument", "Result · entries, then prompt"]}])],
  edges: [],
}
