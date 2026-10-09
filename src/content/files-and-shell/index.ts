import type { Course } from '../types'
import { creatingAndManagingFiles } from './creating-and-managing-files'
import { readingAndEditingText } from './reading-and-editing-text'
import { findingFilesAndSearchingContent } from './finding-files-and-searching-content'
import { filteringAndTransformingText } from './filtering-and-transforming-text'
import { streamsAndRedirection } from './streams-and-redirection'
import { combiningCommandsWithPipelines } from './combining-commands-with-pipelines'
import { archivesAndCompression } from './archives-and-compression'

export const filesAndShell: Course = { id: "files-and-shell", title: "Files, Text Processing, and the Shell", sections: [creatingAndManagingFiles, readingAndEditingText, findingFilesAndSearchingContent, filteringAndTransformingText, streamsAndRedirection, combiningCommandsWithPipelines, archivesAndCompression] }
