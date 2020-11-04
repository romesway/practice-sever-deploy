module.exports = {
	development: {
		username: 'yuil',
		password: process.env.DATABASE_PASSWORD,
		database: 'shortly',
		host: 'localhost',
		dialect: 'mysql',
		logging: false,
	},
};
