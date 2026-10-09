import type { Scene } from '@graphlearning/flow'
import { networkingFundamentalsScene } from './networking-fundamentals'
import { nameResolutionAndConnectivityScene } from './name-resolution-and-connectivity'
import { authorizedRemoteAccessScene } from './authorized-remote-access'
import { remoteFileTransferScene } from './remote-file-transfer'
import { understandingStorageAndFilesystemsScene } from './understanding-storage-and-filesystems'
import { mountsAndDisposableStorageScene } from './mounts-and-disposable-storage'
import { backingUpSampleDataScene } from './backing-up-sample-data'
import { restoringDataAndResolvingStorageProblemsScene } from './restoring-data-and-resolving-storage-problems'

export const networkingAndStorageScenes: Scene[] = [networkingFundamentalsScene, nameResolutionAndConnectivityScene, authorizedRemoteAccessScene, remoteFileTransferScene, understandingStorageAndFilesystemsScene, mountsAndDisposableStorageScene, backingUpSampleDataScene, restoringDataAndResolvingStorageProblemsScene]
