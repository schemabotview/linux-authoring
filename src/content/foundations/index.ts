import type { Course } from '../types'
import { understandingLinux } from './understanding-linux'
import { understandingTheLearningEnvironment } from './understanding-the-learning-environment'
import { gettingComfortableWithTheTerminal } from './getting-comfortable-with-the-terminal'
import { navigatingTheFilesystem } from './navigating-the-filesystem'
import { findingHelpAndDocumentation } from './finding-help-and-documentation'
import { inspectingTheSystem } from './inspecting-the-system'
import { buildingSafeCommandLineHabits } from './building-safe-command-line-habits'

export const foundations: Course = { id: "foundations", title: "Linux Foundations and Getting Started", sections: [understandingLinux, understandingTheLearningEnvironment, gettingComfortableWithTheTerminal, navigatingTheFilesystem, findingHelpAndDocumentation, inspectingTheSystem, buildingSafeCommandLineHabits] }
