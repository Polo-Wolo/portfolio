// tailwind.config.js
module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			minHeight: {
				'300': '300px',
			},
			colors: {
				'earie': '#1e1e1e',
				dodger: {
					light: '#33ADFF',
					DEFAULT: '#0098ff',
					dark: '#33ADFF',
					bg: '#003D66',
				},
				'indian': '#e09f3e',
				'crayola': '#ed254e'
			},
			borderWidth: {
				'3': '3px',
			},
			inset: {
				'6.5': '1.625rem',
				'6.75': '1.6875rem',
				'52.25': '13.0625rem',
				'52.5': '13.125rem',
			},
			backgroundImage: theme => ({
				'main': "url('/background.png')"
			})
		},
	},
	variants: {
		extend :{
			fontWeight: ['hover', 'focus'],
		}
	},
	plugins: [],
  }