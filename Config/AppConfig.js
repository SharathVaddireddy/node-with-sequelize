module.exports = {

	database: {
		name: 'SampleDB',
		username: 'sharath',
		password: 'root@123',
		host: 'localhost',
		dialect: 'mssql',
		pollConfig: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	},
	application: {
		port: 4000,
		secret: 'Secret@2019'
	}
}