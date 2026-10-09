import type { Scene } from '@graphlearning/flow'
import { creatingAndManagingFilesScene } from './creating-and-managing-files'
import { readingAndEditingTextScene } from './reading-and-editing-text'
import { findingFilesAndSearchingContentScene } from './finding-files-and-searching-content'
import { filteringAndTransformingTextScene } from './filtering-and-transforming-text'
import { streamsAndRedirectionScene } from './streams-and-redirection'
import { combiningCommandsWithPipelinesScene } from './combining-commands-with-pipelines'
import { archivesAndCompressionScene } from './archives-and-compression'

export const filesAndShellScenes: Scene[] = [creatingAndManagingFilesScene, readingAndEditingTextScene, findingFilesAndSearchingContentScene, filteringAndTransformingTextScene, streamsAndRedirectionScene, combiningCommandsWithPipelinesScene, archivesAndCompressionScene]
