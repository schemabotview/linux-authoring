import type { Scene } from '@graphlearning/flow'
import { mapBand } from '../system-map'

// Focused view of the shared master map; only this section’s detail is expanded.
export const sec006Scene: Scene = {
  id: 'crs-001-sec-006-scene',
  padding: 0.18,
  flow: 'TB',
  nodes: [mapBand('distribution', [{"id": "identity", "label": "Inspect the system", "kind": "table", "headers": ["Command", "Identifies"], "values": [["uname -s", "Kernel name"], ["uname -r", "Kernel release"], ["cat /etc/os-release", "Distribution"], ["id", "User / groups"]]}, {"id": "interpret", "label": "Interpret before acting", "kind": "list", "framed": true, "pattern": "user", "items": ["Kernel ≠ distribution release", "Prompt ≠ proof of identity", "Inspect as an ordinary user", "Investigate permission errors"]}])],
  edges: [],
}
