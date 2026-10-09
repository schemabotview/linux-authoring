import type { Course } from './types'
import { crs001 } from './crs-001'
import { crs002 } from './crs-002'
import { crs003 } from './crs-003'
import { crs004 } from './crs-004'
import { crs005 } from './crs-005'
import { crs006 } from './crs-006'
import { crs007 } from './crs-007'

export const COURSES: Record<string, Course> = {
  [crs001.id]: crs001,
  [crs002.id]: crs002,
  [crs003.id]: crs003,
  [crs004.id]: crs004,
  [crs005.id]: crs005,
  [crs006.id]: crs006,
  [crs007.id]: crs007,
}

export type { Course, Section } from './types'
export { slugOf, allSections } from '@graphlearning/shell'
export function getCourse(id: string): Course | undefined { return COURSES[id] }
