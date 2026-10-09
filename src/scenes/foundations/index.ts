import type { Scene } from '@graphlearning/flow'
import { understandingLinuxScene } from './understanding-linux'
import { understandingTheLearningEnvironmentScene } from './understanding-the-learning-environment'
import { gettingComfortableWithTheTerminalScene } from './getting-comfortable-with-the-terminal'
import { navigatingTheFilesystemScene } from './navigating-the-filesystem'
import { findingHelpAndDocumentationScene } from './finding-help-and-documentation'
import { inspectingTheSystemScene } from './inspecting-the-system'
import { buildingSafeCommandLineHabitsScene } from './building-safe-command-line-habits'

export const foundationsScenes: Scene[] = [understandingLinuxScene, understandingTheLearningEnvironmentScene, gettingComfortableWithTheTerminalScene, navigatingTheFilesystemScene, findingHelpAndDocumentationScene, inspectingTheSystemScene, buildingSafeCommandLineHabitsScene]
