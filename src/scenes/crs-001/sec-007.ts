import type { Scene } from '@graphlearning/flow'
import { mapBand } from '../system-map'

// Focused view of the shared master map; only this section’s detail is expanded.
export const sec007Scene: Scene = {
  id: 'crs-001-sec-007-scene',
  padding: 0.18,
  flow: 'TB',
  nodes: [mapBand('applications', [{"id": "decision", "label": "Before Enter", "kind": "list", "framed": true, "pattern": "user", "items": ["1 · System, user, directory", "2 · Command, options, target"]}, {"id": "result", "label": "After the command", "kind": "list", "framed": true, "pattern": "storage", "items": ["3 · Read errors; stop on failure", "4 · Verify the resulting state"]}], { edges: [{"source": "decision", "target": "result", "label": "submit only when understood"}] })],
  edges: [],
}
