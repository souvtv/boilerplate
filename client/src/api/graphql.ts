import { Client, cacheExchange, fetchExchange } from 'urql'

export const gqlClient = new Client({
	url: 'https://tonarede.souv.tv/graphql',
	exchanges: [cacheExchange, fetchExchange],
	fetchOptions: () => {
		// TODO AUTH TOKEN
		// const token = getToken();
		return {
			//   headers: { authorization: token ? `Bearer ${token}` : '' },
		}
	},
})
