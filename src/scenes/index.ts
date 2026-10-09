import type { Scene } from '@graphlearning/flow'
import { systemMapScene } from './system-map'
import { crs001Scenes } from './crs-001'
import { crs002Scenes } from './crs-002'
import { crs003Scenes } from './crs-003'
import { crs004Scenes } from './crs-004'
import { crs005Scenes } from './crs-005'
import { crs006Scenes } from './crs-006'
import { crs007Scenes } from './crs-007'

const ALL: Scene[] = [...crs001Scenes, ...crs002Scenes, ...crs003Scenes, ...crs004Scenes, ...crs005Scenes, ...crs006Scenes, ...crs007Scenes]
export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map(scene => [scene.id, scene]))
// Auxiliary reference scenes use the shell's existing bare-scene route.
// Keep them separate so the 50-section registry remains an exact curriculum mapping.
export const REFERENCE_SCENES: Record<string, Scene> = { [systemMapScene.id]: systemMapScene }
export function getScene(id: string): Scene | undefined { return SCENES[id] ?? REFERENCE_SCENES[id] }
