const pg = require('pg');
const { db, db_port, db_host, db_user, db_password } = require('../utils/config')
const Pool = pg.Pool;

const pool = new Pool({
  user: db_user,
  password: db_password,
  host: db_host,
  database: db,
  port: db_port
});

module.exports = pool;