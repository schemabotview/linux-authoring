import type { Scene } from '@graphlearning/flow'
import { mapBand } from '../system-map'

// Focused view of the shared master map; only this section’s detail is expanded.
export const sec002Scene: Scene = {
  id: 'crs-001-sec-002-scene',
  padding: 0.18,
  flow: 'TB',
  nodes: [mapBand('hardware', [{"id": "host", "label": "Everyday host", "pattern": "group", "children": [{"id": "host-data", "label": "Important host data", "sub": "Keep outside the practice system", "pattern": "storage", "icon": "folder"}, {"id": "lab", "label": "Linux VM · proposed", "pattern": "service", "children": [{"id": "identity", "label": "Ordinary user: maya", "sub": "Practice home: /home/maya", "pattern": "user", "icon": "user"}, {"id": "checkpoint", "label": "Clean checkpoint", "sub": "Test restoration before changes", "pattern": "storage", "icon": "history"}]}], "edges": [{"source": "host-data", "target": "lab", "label": "avoid sharing", "dashed": true}]}], { sub: 'Learning boundary: host versus guest; each OS has its own user/kernel view.' })],
  edges: [],
}
