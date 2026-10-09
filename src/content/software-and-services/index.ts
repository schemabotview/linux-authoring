import type { Course } from '../types'
import { understandingSoftwareSources } from './understanding-software-sources'
import { installingAndMaintainingSoftware } from './installing-and-maintaining-software'
import { understandingProcesses } from './understanding-processes'
import { controllingProcesses } from './controlling-processes'
import { inspectingSystemResources } from './inspecting-system-resources'
import { managingServices } from './managing-services'
import { readingLogsAndDiagnosingOperationalProblems } from './reading-logs-and-diagnosing-operational-problems'

export const softwareAndServices: Course = { id: "software-and-services", title: "Software, Processes, Services, and Logs", sections: [understandingSoftwareSources, installingAndMaintainingSoftware, understandingProcesses, controllingProcesses, inspectingSystemResources, managingServices, readingLogsAndDiagnosingOperationalProblems] }
