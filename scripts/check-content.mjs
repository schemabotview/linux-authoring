import { build } from 'esbuild'
import { readFileSync } from 'node:fs'
const manifest = JSON.parse(readFileSync('scripts/course-manifest.json', 'utf8'))
const result = await build({ stdin: { contents: "export { COURSES } from './src/content'; export { SCENES } from './src/scenes'", resolveDir: process.cwd() }, bundle: true, platform: 'node', format: 'esm', write: false })
const { COURSES, SCENES } = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'))
const seen = new Set()
for (const planned of manifest.courses) {
  const course = COURSES[planned.id]
  if (!course || course.sections.length !== planned.sections.length) throw new Error(`Course mismatch: ${planned.id}`)
  course.sections.forEach((section, index) => {
    if (section.id !== planned.sections[index].id || seen.has(section.id)) throw new Error(`Invalid section: ${section.id}`)
    seen.add(section.id)
    const scene = SCENES[section.scene]
    if (!scene) throw new Error(`Missing scene: ${section.scene}`)
    const nodeIds = new Set()
    const collect = nodes => nodes.forEach(node => { if (nodeIds.has(node.id)) throw new Error(`Duplicate node: ${node.id}`); nodeIds.add(node.id); collect(node.children ?? []) })
    collect(scene.nodes)
    if (section.focus && !nodeIds.has(section.focus)) throw new Error(`Invalid focus: ${section.id}`)
    if (!section.slide.trim()) throw new Error(`Missing slide: ${section.id}`)
    if (process.argv.includes('--release') && (!section.narration.trim() || section.slide.includes('Scaffold'))) throw new Error(`Unfinished section: ${section.id}`)
  })
}
if (Object.keys(COURSES).length !== manifest.courses.length || Object.keys(SCENES).length !== seen.size) throw new Error('Unexpected course or scene count')
console.log(`Structure OK: ${Object.keys(COURSES).length} courses, ${seen.size} sections. Content remains scaffold-only.`)
