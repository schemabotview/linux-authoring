import type { Scene } from '@graphlearning/flow';
import { mapBand } from '../system-map';
// Focused view of the shared master map; only this section’s detail is expanded.
export const sec007Scene: Scene = {
    id: 'crs-001-sec-007-scene',
    padding: 0.18,
    flow: 'TB',
    nodes: [
        mapBand('applications', [
            {
                "id": "decision", "label": "Before Enter", "kind": "list", "framed": true, "pattern": "user", "items": [
                    "1 · System, user, directory", "2 · Command, options, target"
                ]
            }, {
                "id": "result", "label": "After the command", "kind": "list", "framed": true, "pattern": "storage", "items": [
                    "3 · Read errors; stop on failure", "4 · Verify the resulting state"
                ]
            }
        ], {
            flow: 'LR', edges: [
                {
                    "source": "decision", "target": "result", "label": "submit only when understood"
                }
            ]
        }), {
            "id": "context-7", "label": "Carry the context forward", "pattern": "group", "children": [
                {
                    "id": "context-7-roles", "label": "Read the relationships", "pattern": "group", "cols": 3, "children": [
                        {
                            "id": "context-7-0", "label": "System and identity", "sub": "Host or lab? Which user?", "pattern": "user", "icon": "users"
                        }, {
                            "id": "context-7-1", "label": "Location and target", "sub": "Which directory? Which path?", "pattern": "storage", "icon": "folder"
                        }, {
                            "id": "context-7-2", "label": "Documentation", "sub": "Which command and implementation?", "pattern": "service", "icon": "scroll"
                        }
                    ]
                }, {
                    "id": "context-7-checks", "label": "Interpret before proceeding", "kind": "list", "framed": true, "pattern": "user", "icon": "none", "items": [
                        "History recalls a line, not today’s context", "If cd fails, stop before using relative paths", "Permission errors do not justify an automatic privileged retry"
                    ]
                }
            ]
        }
    ],
    edges: [],
};
