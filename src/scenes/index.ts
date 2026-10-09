import type { Scene } from '@graphlearning/flow'
import { systemMapScene } from './system-map'
import { foundationsScenes } from './foundations'
import { filesAndShellScenes } from './files-and-shell'
import { usersAndSecurityScenes } from './users-and-security'
import { softwareAndServicesScenes } from './software-and-services'
import { networkingAndStorageScenes } from './networking-and-storage'
import { scriptingScenes } from './scripting'
import { administrationScenes } from './administration'

const ALL: Scene[] = [...foundationsScenes, ...filesAndShellScenes, ...usersAndSecurityScenes, ...softwareAndServicesScenes, ...networkingAndStorageScenes, ...scriptingScenes, ...administrationScenes]
export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map(scene => [scene.id, scene]))
// Auxiliary reference scenes use the shell's existing bare-scene route.
// Keep them separate so the 50-section registry remains an exact curriculum mapping.
export const REFERENCE_SCENES: Record<string, Scene> = { [systemMapScene.id]: systemMapScene }
export function getScene(id: string): Scene | undefined { return SCENES[id] ?? REFERENCE_SCENES[id] }
