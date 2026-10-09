import type { Scene } from '@graphlearning/flow';
import { mapBand } from '../system-map';
// Focused view of the shared master map; only this section’s detail is expanded.
export const sec005Scene: Scene = {
    id: 'crs-001-sec-005-scene',
    padding: 0.18,
    flow: 'TB',
    nodes: [
        mapBand('applications', [
            {
                "id": "help-map", "label": "Choose the reference", "kind": "table", "headers": [
                    "Need", "Reference"
                ], "values": [
                    [
                        "ls options", "ls --help"
                    ], [
                        "ls manual", "man 1 ls"
                    ], [
                        "cd builtin", "help cd"
                    ]
                ]
            }, {
                "id": "manual", "label": "Read a manual page", "kind": "list", "framed": true, "pattern": "service", "items": [
                    "NAME · purpose", "SYNOPSIS · accepted form", "OPTIONS · option meanings", "[ ] · usually optional parts"
                ]
            }
        ], {
            cols: 2
        }), {
            "id": "context-5", "label": "Find and interpret help", "pattern": "group", "children": [
                {
                    "id": "context-5-roles", "label": "Read the relationships", "pattern": "group", "cols": 3, "children": [
                        {
                            "id": "context-5-0", "label": "Tool help", "sub": "ls --help · short usage", "pattern": "user", "icon": "terminal"
                        }, {
                            "id": "context-5-1", "label": "Manual collection", "sub": "man 1 ls · user-command page", "pattern": "service", "icon": "scroll"
                        }, {
                            "id": "context-5-2", "label": "Shell builtin", "sub": "help cd · Bash reference", "pattern": "user", "icon": "terminal"
                        }
                    ]
                }, {
                    "id": "context-5-checks", "label": "Interpret before proceeding", "kind": "list", "framed": true, "pattern": "user", "icon": "none", "items": [
                        "Match the installed implementation", "Synopsis brackets usually mark optional pieces", "Typical less pager: / searches, q quits"
                    ]
                }
            ]
        }
    ],
    edges: [],
};
