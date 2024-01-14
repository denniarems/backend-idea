import { swagger } from '@elysiajs/swagger'
import { logger } from '@grotto/logysia'
import { Elysia } from 'elysia'
import { autoroutes } from 'elysia-autoroutes'
// import { compression } from 'elysia-compression'
// import { helmet } from 'elysia-helmet'
import { httpError } from 'elysia-http-error'
import { env } from './env'
// import { rateLimit } from 'elysia-rate-limit'

const app = new Elysia()
	.use(
		swagger({
			autoDarkMode: true
		})
	)
	// .use(helmet())
	// .use(compression())
	.use(logger({ logIP: true }))
	// .use(rateLimit({}))
	.use(httpError())
	.use(
		autoroutes({
			routesDir: './routes' // -> optional, defaults to './routes'
		})
	)
	.listen(env.PORT)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
console.log(`🦊 Swagger is running at ${app.server?.hostname}:${app.server?.port}/swagger`)

export type ElysiaApp = typeof app
