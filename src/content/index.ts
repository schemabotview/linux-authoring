import type { Course } from './types'
import { foundations } from './foundations'
import { filesAndShell } from './files-and-shell'
import { usersAndSecurity } from './users-and-security'
import { softwareAndServices } from './software-and-services'
import { networkingAndStorage } from './networking-and-storage'
import { scripting } from './scripting'
import { administration } from './administration'

export const COURSES: Record<string, Course> = {
  [foundations.id]: foundations,
  [filesAndShell.id]: filesAndShell,
  [usersAndSecurity.id]: usersAndSecurity,
  [softwareAndServices.id]: softwareAndServices,
  [networkingAndStorage.id]: networkingAndStorage,
  [scripting.id]: scripting,
  [administration.id]: administration,
}

export type { Course, Section } from './types'
export { slugOf, allSections } from '@graphlearning/shell'
export function getCourse(id: string): Course | undefined { return COURSES[id] }
