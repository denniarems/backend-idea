// routes/index.ts

import { hello } from '~/handlers/hello'
import { ElysiaApp } from '~/main'

export default (app: ElysiaApp) => app.get('', () => hello())
