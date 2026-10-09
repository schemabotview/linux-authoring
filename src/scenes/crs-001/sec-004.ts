import type { Scene } from '@graphlearning/flow';
import { mapBand } from '../system-map';
// Focused view of the shared master map; only this section’s detail is expanded.
export const sec004Scene: Scene = {
    id: 'crs-001-sec-004-scene',
    padding: 0.18,
    flow: 'TB',
    nodes: [
        {
            id: 'location-map', label: 'Shell context and filesystem', pattern: 'group', flow: 'LR', children: [
                mapBand('applications', [
                    {
                        "id": "movement", "kind": "code", "filename": "Illustrative movement", "label": "$ cd /home/maya\n$ cd ..\n$ pwd\n/home", "hug": true
                    }
                ]), mapBand('io', [
                    {
                        "id": "root", "icon": "folder", "label": "/", "sub": "Filesystem root", "pattern": "storage", "children": [
                            {
                                "id": "home", "icon": "folder", "label": "/home", "pattern": "storage", "children": [
                                    {
                                        "id": "maya", "label": "/home/maya", "sub": "Working directory", "pattern": "user", "icon": "folder"
                                    }
                                ]
                            }
                        ]
                    }
                ])
            ], edges: [
                {
                    source: 'map-applications', target: 'map-io', label: 'uses filesystem paths'
                }
            ]
        }, {
            "id": "context-4", "label": "Paths depend on context", "pattern": "group", "children": [
                {
                    "id": "context-4-roles", "label": "Read the relationships", "pattern": "group", "cols": 3, "children": [
                        {
                            "id": "context-4-0", "label": "Absolute path", "sub": "/home/maya · starts at /", "pattern": "storage", "icon": "folder"
                        }, {
                            "id": "context-4-1", "label": "Relative path", "sub": ".. · starts at working directory", "pattern": "user", "icon": "folder"
                        }, {
                            "id": "context-4-2", "label": "Check location", "sub": "pwd · inspect after movement", "pattern": "service", "icon": "search"
                        }
                    ]
                }, {
                    "id": "context-4-checks", "label": "Interpret before proceeding", "kind": "list", "framed": true, "pattern": "user", "icon": "none", "items": [
                        ". means the current directory", ".. means its parent", "If cd fails, the old working directory remains"
                    ]
                }
            ]
        }
    ],
    edges: [],
};
