import type { Course } from '../types'
import { aStructuredTroubleshootingMethod } from './a-structured-troubleshooting-method'
import { diagnosingAccessProblems } from './diagnosing-access-problems'
import { diagnosingProcessAndServiceFailures } from './diagnosing-process-and-service-failures'
import { diagnosingNetworkProblems } from './diagnosing-network-problems'
import { diagnosingStorageAndRecoveryProblems } from './diagnosing-storage-and-recovery-problems'
import { reviewingSecurityAndOperationalHealth } from './reviewing-security-and-operational-health'
import { endToEndAdministrationAndHandoff } from './end-to-end-administration-and-handoff'

export const administration: Course = { id: "administration", title: "Linux Administration and Troubleshooting", sections: [aStructuredTroubleshootingMethod, diagnosingAccessProblems, diagnosingProcessAndServiceFailures, diagnosingNetworkProblems, diagnosingStorageAndRecoveryProblems, reviewingSecurityAndOperationalHealth, endToEndAdministrationAndHandoff] }
