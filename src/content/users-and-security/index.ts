import type { Course } from '../types'
import { linuxIdentitiesAndPrivilege } from './linux-identities-and-privilege'
import { managingUsers } from './managing-users'
import { managingGroups } from './managing-groups'
import { understandingFilePermissions } from './understanding-file-permissions'
import { changingOwnershipAndAccess } from './changing-ownership-and-access'
import { managingPrivilegedOperations } from './managing-privileged-operations'
import { reviewingAccessAndBasicSecurity } from './reviewing-access-and-basic-security'

export const usersAndSecurity: Course = { id: "users-and-security", title: "Users, Permissions, and Security Fundamentals", sections: [linuxIdentitiesAndPrivilege, managingUsers, managingGroups, understandingFilePermissions, changingOwnershipAndAccess, managingPrivilegedOperations, reviewingAccessAndBasicSecurity] }
