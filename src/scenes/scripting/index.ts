import type { Scene } from '@graphlearning/flow'
import { fromCommandsToScriptsScene } from './from-commands-to-scripts'
import { variablesParametersAndQuotingScene } from './variables-parameters-and-quoting'
import { conditionsAndDecisionsScene } from './conditions-and-decisions'
import { loopsAndRepeatedWorkScene } from './loops-and-repeated-work'
import { functionsAndReuseScene } from './functions-and-reuse'
import { errorsDebuggingAndLoggingScene } from './errors-debugging-and-logging'
import { automatingRoutineAdministrationScene } from './automating-routine-administration'

export const scriptingScenes: Scene[] = [fromCommandsToScriptsScene, variablesParametersAndQuotingScene, conditionsAndDecisionsScene, loopsAndRepeatedWorkScene, functionsAndReuseScene, errorsDebuggingAndLoggingScene, automatingRoutineAdministrationScene]
