module.exports = {
	'roots': [
		'<rootDir>/lib'
	],
	'testMatch': [
		'**/Tests/test.*.+(ts|tsx|js)',
	],
	'transform': {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	moduleNameMapper: {
		'^axios$': require.resolve('axios'),
	},
}