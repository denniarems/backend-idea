import { swagger } from '@elysiajs/swagger'
import { logger } from '@grotto/logysia'
import { Elysia } from 'elysia'
import { autoroutes } from 'elysia-autoroutes'
import { compression } from 'elysia-compression'
import { helmet } from 'elysia-helmet'
import { httpError } from 'elysia-http-error'
import { ip } from 'elysia-ip'
// import { rateLimit } from 'elysia-rate-limit'

const app = new Elysia()
	.use(helmet())
	.use(logger({ logIP: true }))
	// .use(rateLimit({}))
	.use(httpError())
	.use(compression())
	.use(ip())
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
console.log(`🦊 Swagger is running at ${app.server?.hostname}:${app.server?.port}/swagger`)

export type ElysiaApp = typeof app
