import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile } from 'node:fs/promises'

function courseNameHeader(code: string): string {
  const original = 'eyebrow: `${a ?? e.toUpperCase()} · ${v.id.toUpperCase()}`'
  if (code.split(original).length !== 2) {
    throw new Error('Review course-name eyebrow adapter after changing ui-shell version')
  }
  return code.replace(original, 'eyebrow: `${v.title.toUpperCase()}`')
}

// The render engine is the @graphlearning/flow package, not a local folder. `dedupe` keeps a single
// copy of react / react-dom / @xyflow/react across this app and the package — the gotcha that bites
// when two React copies meet (invalid-hook-call). The package declares them as peer deps and
// externalises them, so it never carries its own React; dedupe is the belt to that braces.
// jsx is automatic by default with @vitejs/plugin-react.
export default defineConfig({
  base: '/linux-authoring/',
  // shell 0.8.0 has no course-label option. Adapt only its visible eyebrow;
  // the original course IDs continue to drive routing and curriculum identity.
  plugins: [
    {
      name: 'course-name-eyebrow',
      enforce: 'pre',
      transform(code, id) {
        if (!id.split('?')[0].endsWith('/@graphlearning/shell/dist/index.js')) return
        return { code: courseNameHeader(code), map: null }
      },
    },
    react(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [{
        name: 'course-name-eyebrow',
        setup(build) {
          build.onLoad({ filter: /@graphlearning[\/]shell[\/]dist[\/]index\.js$/ }, async ({ path }) => ({
            contents: courseNameHeader(await readFile(path, 'utf8')),
            loader: 'js',
          }))
        },
      }],
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', '@xyflow/react'],
  },
  server: { port: 5177 },
})
