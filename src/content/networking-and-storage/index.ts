import type { Course } from '../types'
import { networkingFundamentals } from './networking-fundamentals'
import { nameResolutionAndConnectivity } from './name-resolution-and-connectivity'
import { authorizedRemoteAccess } from './authorized-remote-access'
import { remoteFileTransfer } from './remote-file-transfer'
import { understandingStorageAndFilesystems } from './understanding-storage-and-filesystems'
import { mountsAndDisposableStorage } from './mounts-and-disposable-storage'
import { backingUpSampleData } from './backing-up-sample-data'
import { restoringDataAndResolvingStorageProblems } from './restoring-data-and-resolving-storage-problems'

export const networkingAndStorage: Course = { id: "networking-and-storage", title: "Networking, Remote Access, and Storage", sections: [networkingFundamentals, nameResolutionAndConnectivity, authorizedRemoteAccess, remoteFileTransfer, understandingStorageAndFilesystems, mountsAndDisposableStorage, backingUpSampleData, restoringDataAndResolvingStorageProblems] }
