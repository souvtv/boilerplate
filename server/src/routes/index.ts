import { Hono } from 'hono'

const handler = (request: Request, env: Env, ctx: ExecutionContext) => {
	const app = new Hono<HonoEnv>()

	app.get('/', (c) => c.text('Hello Hono!'))

	app.get('/hello', (c) => c.text('Hello Hono!'))

	app.get('/world', (c) => c.text('World Hono!'))

	app.all('*', async (c) => {
		try {
			const res = await c.env?.ASSETS.fetch(c.req.raw)
			return res
		} catch (err) {
			console.error(err)
			return c.text('Not Found!', 404)
		}
	})

	return app.fetch(request, env, ctx)
}

export default handler
