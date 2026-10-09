import type { PatternKey, Scene, SceneNode } from '@graphlearning/flow'

/* Master-map authoring metadata
Sources checked 2026-10-09:
- https://www.debian.org/intro/about — distribution composition and examples.
- https://docs.kernel.org/admin-guide/index.html — kernel subsystems; rolling index.
- https://man7.org/linux/man-pages/man2/syscalls.2.html — user/kernel interface;
  Linux man-pages reference, syscall list only current through Linux 5.14.
- https://man7.org/linux/man-pages/man7/bootup.7.html — systemd boot overview;
  illustrative systemd-based sequence, not universal boot instructions.
- https://man7.org/linux/man-pages/man7/hier.7.html — conventional directory roles.
Examples describe representative Linux systems, not a validated distribution/release.
Rows show architectural groupings, not mandatory execution stages. Applications can
invoke system calls without traversing every user-space service. Kernel subsystems
cooperate; the row order is not an I/O pipeline. This overview is a reference scene,
not an additional curriculum section. Linux execution and manual user review pending.
*/
export const MAP_LAYERS = {
  applications: { id: 'map-applications', label: 'User space · applications & interfaces', pattern: 'user' },
  runtime: { id: 'map-runtime', label: 'User space · services & runtime', pattern: 'user' },
  boundary: { id: 'map-boundary', label: 'User–kernel boundary · system calls', pattern: 'warn' },
  core: { id: 'map-core', label: 'Kernel space · core subsystems', pattern: 'service' },
  io: { id: 'map-io', label: 'Kernel space · files & devices', pattern: 'service' },
  hardware: { id: 'map-hardware', label: 'Hardware · physical or virtual', pattern: 'storage' },
  boot: { id: 'map-boot', label: 'Boot path · systemd example', pattern: 'external' },
  distribution: { id: 'map-distribution', label: 'Distribution & administration', pattern: 'group' },
} as const satisfies Record<string, { id: string; label: string; pattern: PatternKey }>

export type MapLayer = keyof typeof MAP_LAYERS

// A focused view reuses the master band's identity, wording, and semantic color.
// It supplies only the detail taught by the current section.
export function mapBand(layer: MapLayer, children: SceneNode[], options: Partial<Omit<SceneNode, 'id' | 'label' | 'pattern' | 'children'>> = {}): SceneNode {
  return { ...MAP_LAYERS[layer], icon: 'none', children, ...options }
}

export function mapSummary(layer: MapLayer, items: string[]): SceneNode {
  return { ...MAP_LAYERS[layer], kind: 'list', framed: true, icon: 'none', items }
}

const card = (id: string, label: string, sub: string, pattern: PatternKey): SceneNode => ({ id, label, sub, pattern, icon: 'none' })

export const systemMapScene: Scene = {
  id: 'linux-system-map',
  padding: 0.12,
  align: 'start',
  stretch: true,
  nodes: [
    {
      id: 'map-title', label: 'Linux system map', icon: 'none', pattern: 'group',
      sub: 'Representative components · bands are relationships, not execution stages',
    },
    mapBand('applications', [
      card('map-desktop', 'Desktop / GUI', 'Desktops and browsers', 'user'),
      card('map-terminal', 'Terminal / CLI', 'Shells, commands, scripts', 'user'),
      card('map-workloads', 'Workloads', 'Servers and databases', 'user'),
    ], { cols: 3, sub: 'Programs use libraries and IPC; they may also invoke system calls directly.' }),
    mapBand('runtime', [
      card('map-management', 'Service management', 'systemd / PID 1 example', 'user'),
      card('map-services', 'System services', 'Login, networking, SSH', 'user'),
      card('map-libraries', 'Libraries / runtimes', 'C library, language runtimes', 'user'),
    ], { cols: 3 }),
    mapBand('boundary', [
      { id: 'map-syscalls', label: 'read · write · execve · mmap · socket', variant: 'chip', pattern: 'warn', icon: 'none' },
    ]),
    mapBand('core', [
      card('map-process', 'Process / CPU', 'Scheduling and threads', 'service'),
      card('map-memory', 'Virtual memory', 'Allocation and page tables', 'service'),
      card('map-security', 'Security / isolation', 'Credentials and namespaces', 'service'),
      card('map-network', 'Network stack', 'Sockets, TCP/IP, routing', 'service'),
    ], { cols: 4, sub: 'Cooperating subsystems; not a strictly sequential pipeline.' }),
    mapBand('io', [
      card('map-filesystems', 'Filesystems / VFS', 'Filesystem interfaces', 'service'),
      card('map-storage', 'Storage stack', 'Block devices and I/O', 'service'),
      card('map-drivers', 'Device drivers', 'Device-specific access', 'service'),
    ], { cols: 3 }),
    mapBand('hardware', [
      card('map-compute', 'Compute', 'CPU and RAM', 'storage'),
      card('map-disks', 'Storage', 'Disks and controllers', 'storage'),
      card('map-peripherals', 'Peripherals', 'Display, network, input', 'storage'),
    ], { cols: 3 }),
    mapBand('boot', [
      { id: 'map-startup', label: 'Firmware → bootloader → kernel → root filesystem → PID 1 → services', variant: 'chip', pattern: 'external', icon: 'none' },
    ]),
    mapBand('distribution', [
      card('map-packages', 'Software integration', 'Packages, updates, defaults', 'group'),
      card('map-paths', 'Conventional locations', '/etc · /usr · /var · /home', 'group'),
    ], { cols: 2, sub: 'Spans the system; examples and defaults vary by distribution.' }),
  ],
  edges: [], // Row order is an overview; it must not imply every request traverses all bands.
}
