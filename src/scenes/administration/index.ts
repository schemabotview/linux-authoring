import type { Scene } from '@graphlearning/flow'
import { aStructuredTroubleshootingMethodScene } from './a-structured-troubleshooting-method'
import { diagnosingAccessProblemsScene } from './diagnosing-access-problems'
import { diagnosingProcessAndServiceFailuresScene } from './diagnosing-process-and-service-failures'
import { diagnosingNetworkProblemsScene } from './diagnosing-network-problems'
import { diagnosingStorageAndRecoveryProblemsScene } from './diagnosing-storage-and-recovery-problems'
import { reviewingSecurityAndOperationalHealthScene } from './reviewing-security-and-operational-health'
import { endToEndAdministrationAndHandoffScene } from './end-to-end-administration-and-handoff'

export const administrationScenes: Scene[] = [aStructuredTroubleshootingMethodScene, diagnosingAccessProblemsScene, diagnosingProcessAndServiceFailuresScene, diagnosingNetworkProblemsScene, diagnosingStorageAndRecoveryProblemsScene, reviewingSecurityAndOperationalHealthScene, endToEndAdministrationAndHandoffScene]
