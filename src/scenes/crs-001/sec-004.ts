import type { Scene } from '@graphlearning/flow'
import { mapBand } from '../system-map'

// Focused view of the shared master map; only this section’s detail is expanded.
export const sec004Scene: Scene = {
  id: 'crs-001-sec-004-scene',
  padding: 0.18,
  flow: 'TB',
  nodes: [mapBand('applications', [{"id": "movement", "kind": "code", "filename": "Illustrative movement", "label": "$ cd /home/maya\n$ cd ..\n$ pwd\n/home", "hug": true}]), mapBand('io', [{"id": "root", "label": "/", "sub": "Filesystem root", "pattern": "storage", "children": [{"id": "home", "label": "/home", "pattern": "storage", "children": [{"id": "maya", "label": "/home/maya", "sub": "Working directory", "pattern": "user", "icon": "folder"}]}]}])],
  edges: [{ source: 'map-applications', target: 'map-io', label: 'uses filesystem paths' }],
}
