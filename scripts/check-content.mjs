import { build } from 'esbuild'
import { readFileSync } from 'node:fs'
const manifest = JSON.parse(readFileSync('scripts/course-manifest.json', 'utf8'))
const result = await build({ stdin: { contents: "export { COURSES } from './src/content'; export { SCENES, REFERENCE_SCENES } from './src/scenes'", resolveDir: process.cwd() }, bundle: true, platform: 'node', format: 'esm', write: false })
const { COURSES, SCENES, REFERENCE_SCENES } = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'))
const seen = new Set()
for (const planned of manifest.courses) {
  const course = COURSES[planned.id]
  if (!course || course.title !== planned.title || /^crs-\d+$/i.test(course.id) || course.sections.length !== planned.sections.length) throw new Error(`Course mismatch: ${planned.id}`)
  course.sections.forEach((section, index) => {
    if (section.id !== planned.sections[index].id || section.title !== planned.sections[index].title || /^sec-\d+$/i.test(section.id) || seen.has(section.id)) throw new Error(`Invalid section: ${section.id}`)
    seen.add(section.id)
    const scene = SCENES[section.scene]
    if (!scene) throw new Error(`Missing scene: ${section.scene}`)
    const nodeIds = new Set()
    const collect = nodes => nodes.forEach(node => { if (nodeIds.has(node.id)) throw new Error(`Duplicate node: ${node.id}`); nodeIds.add(node.id); collect(node.children ?? []) })
    collect(scene.nodes)
    const checkEdges = edges => edges.forEach(edge => { if (!nodeIds.has(edge.source) || !nodeIds.has(edge.target)) throw new Error(`Invalid edge: ${section.id}`) })
    const checkNestedEdges = nodes => nodes.forEach(node => { checkEdges(node.edges ?? []); checkNestedEdges(node.children ?? []) })
    checkEdges(scene.edges); checkNestedEdges(scene.nodes)
    if (section.focus && !nodeIds.has(section.focus)) throw new Error(`Invalid focus: ${section.id}`)
    if (!section.slide.trim()) throw new Error(`Missing slide: ${section.id}`)
    if (process.argv.includes('--release') && (!section.narration.trim() || section.slide.includes('Scaffold'))) throw new Error(`Unfinished section: ${section.id}`)
  })
}
if (Object.keys(COURSES).length !== manifest.courses.length || Object.keys(SCENES).length !== seen.size) throw new Error('Unexpected course or scene count')
for (const [id, scene] of Object.entries(REFERENCE_SCENES)) {
  if (id !== scene.id || SCENES[id]) throw new Error(`Invalid reference scene: ${id}`)
  const ids = new Set()
  const collect = nodes => nodes.forEach(node => { if (ids.has(node.id)) throw new Error(`Duplicate reference node: ${node.id}`); ids.add(node.id); collect(node.children ?? []) })
  collect(scene.nodes)
  const edges = es => es.forEach(edge => { if (!ids.has(edge.source) || !ids.has(edge.target)) throw new Error(`Invalid reference edge: ${id}`) })
  const nested = nodes => nodes.forEach(node => { edges(node.edges ?? []); nested(node.children ?? []) })
  edges(scene.edges); nested(scene.nodes)
}
console.log(`Reference scenes OK: ${Object.keys(REFERENCE_SCENES).length}; separate from curriculum.`)
console.log(`Structure OK: ${Object.keys(COURSES).length} courses, ${seen.size} sections. Structure checks do not establish content or release readiness.`)
