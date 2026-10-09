import type { Scene } from '@graphlearning/flow'
import { linuxIdentitiesAndPrivilegeScene } from './linux-identities-and-privilege'
import { managingUsersScene } from './managing-users'
import { managingGroupsScene } from './managing-groups'
import { understandingFilePermissionsScene } from './understanding-file-permissions'
import { changingOwnershipAndAccessScene } from './changing-ownership-and-access'
import { managingPrivilegedOperationsScene } from './managing-privileged-operations'
import { reviewingAccessAndBasicSecurityScene } from './reviewing-access-and-basic-security'

export const usersAndSecurityScenes: Scene[] = [linuxIdentitiesAndPrivilegeScene, managingUsersScene, managingGroupsScene, understandingFilePermissionsScene, changingOwnershipAndAccessScene, managingPrivilegedOperationsScene, reviewingAccessAndBasicSecurityScene]
