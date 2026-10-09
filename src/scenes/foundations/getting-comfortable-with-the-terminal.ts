import type { Scene } from '@graphlearning/flow';
import { mapBand } from '../system-map';
// Focused view of the shared master map; only this section’s detail is expanded.
export const gettingComfortableWithTheTerminalScene: Scene = {
    id: 'foundations-getting-comfortable-with-the-terminal-scene',
    padding: 0.18,
    flow: 'TB',
    nodes: [
        mapBand('applications', [
            {
                "id": "terminal", "kind": "code", "filename": "Illustrative session", "label": "maya@team-lab:~$ ls -a\n.  ..\nmaya@team-lab:~$", "hug": true
            }, {
                "id": "read-line", "label": "Read the interaction", "kind": "list", "framed": true, "pattern": "user", "items": [
                    "Prompt · do not type it", "ls · command name", "-a · option argument", "Result · entries, then prompt"
                ]
            }
        ], {
            cols: 2
        }), {
            "id": "context-3", "label": "A line becomes an interaction", "pattern": "group", "children": [
                {
                    "id": "context-3-roles", "label": "Read the relationships", "pattern": "group", "cols": 3, "children": [
                        {
                            "id": "context-3-0", "label": "Terminal", "sub": "Text input and display", "pattern": "user", "icon": "monitor"
                        }, {
                            "id": "context-3-1", "label": "Bash shell", "sub": "Interprets the submitted line", "pattern": "user", "icon": "terminal"
                        }, {
                            "id": "context-3-2", "label": "Command / result", "sub": "Output, errors, then prompt", "pattern": "service", "icon": "file"
                        }
                    ]
                }, {
                    "id": "context-3-checks", "label": "Interpret before proceeding", "kind": "list", "framed": true, "pattern": "user", "icon": "none", "items": [
                        "Spaces separate this simple command’s pieces", "Enter submits the line", "Silence alone does not prove success"
                    ]
                }
            ]
        }
    ],
    edges: [],
};
