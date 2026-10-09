import type { Scene } from '@graphlearning/flow'
import { understandingSoftwareSourcesScene } from './understanding-software-sources'
import { installingAndMaintainingSoftwareScene } from './installing-and-maintaining-software'
import { understandingProcessesScene } from './understanding-processes'
import { controllingProcessesScene } from './controlling-processes'
import { inspectingSystemResourcesScene } from './inspecting-system-resources'
import { managingServicesScene } from './managing-services'
import { readingLogsAndDiagnosingOperationalProblemsScene } from './reading-logs-and-diagnosing-operational-problems'

export const softwareAndServicesScenes: Scene[] = [understandingSoftwareSourcesScene, installingAndMaintainingSoftwareScene, understandingProcessesScene, controllingProcessesScene, inspectingSystemResourcesScene, managingServicesScene, readingLogsAndDiagnosingOperationalProblemsScene]
