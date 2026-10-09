import type { Scene } from '@graphlearning/flow'
import { crs001Scenes } from './crs-001'
import { crs002Scenes } from './crs-002'
import { crs003Scenes } from './crs-003'
import { crs004Scenes } from './crs-004'
import { crs005Scenes } from './crs-005'
import { crs006Scenes } from './crs-006'
import { crs007Scenes } from './crs-007'

const ALL: Scene[] = [...crs001Scenes, ...crs002Scenes, ...crs003Scenes, ...crs004Scenes, ...crs005Scenes, ...crs006Scenes, ...crs007Scenes]
export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map(scene => [scene.id, scene]))
export function getScene(id: string): Scene | undefined { return SCENES[id] }
