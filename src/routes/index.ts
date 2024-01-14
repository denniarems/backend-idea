// routes/index.ts

import { ElysiaApp } from 'main'

export default (app: ElysiaApp) => app.get('', { hello: 'world' })
