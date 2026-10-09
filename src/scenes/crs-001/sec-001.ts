import type { Scene } from '@graphlearning/flow'
import { mapSummary } from '../system-map'

// Three relevant master-map bands; summaries keep the introduction readable.
export const sec001Scene: Scene = {
  id: 'crs-001-sec-001-scene',
  padding: 0.18,
  nodes: [
    mapSummary('applications', ['Shell · interprets commands', 'Applications · editors/services', '↓ Requests via system calls']),
    mapSummary('core', ['Linux kernel · manages resources', '↓ Manages device access']),
    mapSummary('hardware', ['CPU · memory · devices', 'Physical or virtual resources']),
  ],
  edges: [], // Downward request/access relationships are explicit in the summary text.
}
