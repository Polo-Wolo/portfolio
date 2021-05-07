// tailwind.config.js
module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				'120': '30rem',
				'160': '40rem',
			},
			width: {
				'1/7': '14.2857143%'
			},
			colors: {
				'earie': '#1e1e1e',
				dodger: {
					light: '#33ADFF',
					DEFAULT: '#0098ff',
					dark: '#0087E0',
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
				'50': '12.5rem',
				'50.25': '12.5625rem',
				'50.5': '12.625rem',
				'52.25': '13.0625rem',
				'52.5': '13.125rem',
			},
			screen: {
				'2xl': '1920px',
			},
			scale: {
				'101': '1.01'
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