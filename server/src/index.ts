import routes from './routes'

export default {
	fetch: (request, env, ctx) => {
		return routes(request, env, ctx)
	},
	scheduled: () => {
		// Schedule Events
	},
	queue: () => {
		// Queue Events
	},
} satisfies ExportedHandler<Env>
