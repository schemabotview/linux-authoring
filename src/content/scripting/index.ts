import type { Course } from '../types'
import { fromCommandsToScripts } from './from-commands-to-scripts'
import { variablesParametersAndQuoting } from './variables-parameters-and-quoting'
import { conditionsAndDecisions } from './conditions-and-decisions'
import { loopsAndRepeatedWork } from './loops-and-repeated-work'
import { functionsAndReuse } from './functions-and-reuse'
import { errorsDebuggingAndLogging } from './errors-debugging-and-logging'
import { automatingRoutineAdministration } from './automating-routine-administration'

export const scripting: Course = { id: "scripting", title: "Shell Scripting and Automation", sections: [fromCommandsToScripts, variablesParametersAndQuoting, conditionsAndDecisions, loopsAndRepeatedWork, functionsAndReuse, errorsDebuggingAndLogging, automatingRoutineAdministration] }
