const {Pool}= require('pg')
const {db} = require('../database/config')

const pool = new Pool({
	user: db.user,
	password: db.password,
	host:  db.host,
	port: db.port,
	database: db.database

})
module.exports = pool;