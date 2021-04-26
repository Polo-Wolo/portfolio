// tailwind.config.js
module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
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
			backgroundImage: theme => ({
				'main': "url('/background.png')"
			})
		}
	},
	variants: {
		extend :{
			fontWeight: ['hover', 'focus'],
		}
	},
	plugins: [],
  }