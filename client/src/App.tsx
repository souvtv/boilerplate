import React from 'react'
import { ColorModeProvider } from '@components/ui/color-mode'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { Provider } from 'urql'
import { gqlClient } from './api/graphql'

import Example from './Example'

const App = () => {
	return (
		<Provider value={gqlClient}>
			<ChakraProvider value={theme}>
				<ColorModeProvider>
					<Example />
				</ColorModeProvider>
			</ChakraProvider>
		</Provider>
	)
}

export default App
