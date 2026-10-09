import type { Scene } from '@graphlearning/flow';
import { mapBand } from '../system-map';
// Focused view of the shared master map; only this section’s detail is expanded.
export const sec002Scene: Scene = {
    id: 'crs-001-sec-002-scene',
    padding: 0.18,
    flow: 'TB',
    nodes: [
        mapBand('hardware', [
            {
                "id": "host", "label": "Everyday host", "pattern": "group", "cols": 2, "children": [
                    {
                        "id": "host-data", "label": "Important host data", "sub": "Keep outside the practice system", "pattern": "storage", "icon": "folder"
                    }, {
                        "id": "lab", "label": "Linux VM · proposed", "pattern": "service", "children": [
                            {
                                "id": "identity", "label": "Ordinary user: maya", "sub": "Practice home: /home/maya", "pattern": "user", "icon": "user"
                            }, {
                                "id": "checkpoint", "label": "Clean checkpoint", "sub": "Test restoration before changes", "pattern": "storage", "icon": "history"
                            }
                        ]
                    }
                ], "edges": [
                    {
                        "source": "host-data", "target": "lab", "label": "avoid sharing", "dashed": true
                    }
                ]
            }
        ], {
            sub: 'Learning boundary: host versus guest; each OS has its own user/kernel view.'
        }), {
            "id": "context-2", "label": "Connections and recovery", "pattern": "group", "children": [
                {
                    "id": "context-2-roles", "label": "Read the relationships", "pattern": "group", "cols": 3, "children": [
                        {
                            "id": "context-2-0", "label": "Shared folders", "sub": "Connect guest actions to host files", "pattern": "storage", "icon": "none"
                        }, {
                            "id": "context-2-1", "label": "Network access", "sub": "May reach other systems", "pattern": "service", "icon": "none"
                        }, {
                            "id": "context-2-2", "label": "Restore route", "sub": "Test the clean checkpoint", "pattern": "storage", "icon": "none"
                        }
                    ]
                }, {
                    "id": "context-2-checks", "label": "Interpret before proceeding", "kind": "list", "framed": true, "pattern": "user", "icon": "none", "items": [
                        "Keep valuable data outside the lab", "Limit shared folders and network access", "Setup and recovery are not yet validated"
                    ]
                }
            ]
        }
    ],
    edges: [],
};
