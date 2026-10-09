import type { Scene } from '@graphlearning/flow'
import { mapBand } from '../system-map'

// Focused view of the shared master map; only this section’s detail is expanded.
export const sec005Scene: Scene = {
  id: 'crs-001-sec-005-scene',
  padding: 0.18,
  flow: 'TB',
  nodes: [mapBand('applications', [{"id": "help-map", "label": "Choose the reference", "kind": "table", "headers": ["Need", "Reference"], "values": [["ls options", "ls --help"], ["ls manual", "man 1 ls"], ["cd builtin", "help cd"]]}, {"id": "manual", "label": "Read a manual page", "kind": "list", "framed": true, "pattern": "service", "items": ["NAME · purpose", "SYNOPSIS · accepted form", "OPTIONS · option meanings", "[ ] · usually optional parts"]}])],
  edges: [],
}
