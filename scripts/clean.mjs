/**
 * Remove build output.
 *
 * `next dev` and `next build` share the same `.next` directory. Running a
 * production build and then starting the dev server (or the reverse) leaves a
 * mix of dev and production artifacts, and the dev server fails at runtime with
 *
 *   TypeError: __webpack_modules__[moduleId] is not a function
 *   Error: Cannot find module './331.js'
 *
 * There is nothing to debug when that happens — the directory just has to go.
 * A OneDrive-synced checkout can also leave `.next` in a state where Next's
 * `readlink` call fails with EINVAL, which this clears too.
 *
 *   npm run clean        removes .next
 *   npm run clean -- all removes .next and out
 */
import { rmSync, existsSync } from 'node:fs'

const targets = process.argv.includes('all') ? ['.next', 'out'] : ['.next']

for (const target of targets) {
  if (!existsSync(target)) {
    console.log(`${target} — already absent`)
    continue
  }
  rmSync(target, { recursive: true, force: true })
  console.log(`${target} — removed`)
}
