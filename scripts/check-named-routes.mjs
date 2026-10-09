import puppeteer from 'puppeteer'
import { readFileSync, writeFileSync } from 'node:fs'
const manifest = JSON.parse(readFileSync('scripts/course-manifest.json', 'utf8'))
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true })
try {
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  const results = []
  for (const width of [1440, 390]) {
    await page.setViewport({ width, height: 900 })
    for (const course of manifest.courses) {
      // Every route on desktop; every course's longest section title on mobile.
      const sections = width === 1440 ? course.sections : [course.sections.reduce((a,b) => a.title.length > b.title.length ? a : b)]
      for (const section of sections) {
        const slug = `${course.id}-${section.id}`
        await page.goto(`${process.env.PREVIEW_URL ?? 'http://localhost:5180/linux-authoring/'}#/${slug}`, { waitUntil: 'networkidle0' })
        const result = await page.evaluate(() => {
          const eyebrow = document.querySelector('.reel-head__eyebrow')
          const rect = eyebrow?.getBoundingClientRect()
          return { header: eyebrow?.textContent, right: rect?.right, title: document.querySelector('.reel-head__title')?.textContent, nodes: document.querySelectorAll('.react-flow__node').length, overflow: document.documentElement.scrollWidth > innerWidth }
        })
        if (result.header !== `LINUX · ${course.title.replace(/^Linux\s+/i, '').toUpperCase()}` || result.title !== section.title || !result.nodes || result.overflow || result.right > (width === 390 ? width - 48 : width)) throw new Error(`Named route failed: ${slug} at ${width}`)
        results.push({ slug, width, ...result })
      }
    }
  }
  if (errors.length) throw new Error(errors.join('\n'))
  if (process.env.ROUTE_CHECK_OUT) writeFileSync(process.env.ROUTE_CHECK_OUT, JSON.stringify({ errors, results }, null, 2))
  console.log(`Named route checks passed: ${results.length}; no browser errors`)
} finally {
  await browser.close()
}
