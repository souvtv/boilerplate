import { createSystem, defineConfig, defaultConfig, SystemConfig } from '@chakra-ui/react'

const config = defineConfig({
	globalCss: {
		html: {
			colorPalette: 'primary', // Aplica cores default systema
		},
	},
	theme: {
		tokens: {
			colors: {
				primary: {
					50: { value: '#faf5ff' },
					100: { value: '#f3e8ff' },
					200: { value: '#e9d5ff' },
					300: { value: '#d8b4fe' },
					400: { value: '#c084fc' },
					500: { value: '#a855f7' },
					600: { value: '#9333ea' },
					700: { value: '#641ba3' },
					800: { value: '#4a1772' },
					900: { value: '#2f0553' },
					950: { value: '#1a032e' },
				},
			},
		},
		semanticTokens: {
			colors: {
				primary: {
					solid: { value: '{colors.primary.500}' },
					contrast: { value: '{colors.primary.100}' },
					fg: { value: '{colors.primary.700}' },
					muted: { value: '{colors.primary.100}' },
					subtle: { value: '{colors.primary.200}' },
					emphasized: { value: '{colors.primary.300}' },
					focusRing: { value: '{colors.primary.500}' },
				},
			},
		},
	},
} satisfies SystemConfig)

export const theme = createSystem(defaultConfig, config)

export default theme
