import type { Scene } from '@graphlearning/flow'
import { mapBand } from '../system-map'

// A dense introduction: the shared layers plus the responsibilities they explain.
// The distribution groups software; hardware is outside that software boundary.
export const understandingLinuxScene: Scene = {
  id: 'foundations-understanding-linux-scene',
  padding: 0.18,
  nodes: [
    {
      id: 'system-roles', label: 'One system · cooperating roles', pattern: 'group',
      children: [
        mapBand('distribution', [
          mapBand('applications', [
            { id: 'shell', label: 'Shell', sub: 'Interprets commands', pattern: 'user', icon: 'terminal' },
            { id: 'applications', label: 'Applications', sub: 'Editors · servers · tools', pattern: 'user', icon: 'boxes' },
          ], { cols: 2 }),
          mapBand('boundary', [
            { id: 'requests', label: 'Programs request kernel services', variant: 'chip', pattern: 'warn', icon: 'none' },
          ]),
          mapBand('core', [
            { id: 'cpu', label: 'Processes / CPU', sub: 'Schedules work', pattern: 'service', icon: 'cpu' },
            { id: 'memory', label: 'Memory', sub: 'Manages allocation', pattern: 'service', icon: 'memory' },
            { id: 'device-access', label: 'Device access', sub: 'Coordinates I/O', pattern: 'service', icon: 'plug' },
          ], { cols: 3 }),
        ], { sub: 'Kernel + tools + libraries + software', flow: 'TB' }),
        mapBand('hardware', [
          { id: 'compute', label: 'CPU / RAM', pattern: 'storage', icon: 'cpu' },
          { id: 'devices', label: 'Disks / network', pattern: 'storage', icon: 'harddrive' },
        ], { cols: 2, sub: 'Physical or virtual resources' }),
      ],
    },
    {
      id: 'kernel-purpose', label: 'What the kernel makes possible', pattern: 'group', cols: 3,
      children: [
        { id: 'sharing', label: 'Shared resources', sub: 'Many programs use one machine', pattern: 'service', icon: 'scale' },
        { id: 'interfaces', label: 'Common interfaces', sub: 'Files · processes · networking', pattern: 'service', icon: 'braces' },
        { id: 'boundary', label: 'Managed access', sub: 'User programs request services', pattern: 'warn', icon: 'dooropen' },
      ],
    },
  ],
  edges: [
    { source: 'map-applications', target: 'map-boundary', label: 'system calls' },
    { source: 'map-core', target: 'map-hardware', label: 'manages resources' },
  ],
}
