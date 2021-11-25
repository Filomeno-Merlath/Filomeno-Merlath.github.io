var pg = require('pg');

const connectionString = "postgres://fcozzeuh:1oRtCyOavGY8TFoPw-ix03T9SmBWkPRU@surus.db.elephantsql.com/fcozzeuh"

const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10,
    ssl: {
        require: true, 
        rejectUnauthorized: false
    }
})

module.exports = pool;