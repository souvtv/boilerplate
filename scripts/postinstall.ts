import { execSync } from 'node:child_process'
import path from 'node:path'

execSync(`bun chakra typegen ${path.resolve('client/src/theme/index.ts')}`, {
	stdio: 'inherit',
})
