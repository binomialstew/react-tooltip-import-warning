module.exports = {
	extends: ['airbnb', 'plugin:prettier/recommended'],
	globals: {
		React: true,
	},
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js'],
			},
		],
		'import/extensions': [1, 'never'],
	},
	settings: {
		'import/resolver': {
			alias: {
				extensions: ['.js'],
			},
		},
	},
};
