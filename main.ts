import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { autoroutes } from 'elysia-autoroutes'

const app = new Elysia()
	.use(
		swagger({
			autoDarkMode: true
		})
	)
	.use(
		autoroutes({
			routesDir: './src/routes' // -> optional, defaults to './routes'
		})
	)
	.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

export type ElysiaApp = typeof app
