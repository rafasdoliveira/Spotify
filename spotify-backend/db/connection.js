const Pool = require('pg').Pool;
const pool = new Pool({
  host: 'db.keztncwqdiwmjhvxyczy.supabase.co',
  database: 'postgres',
  user: 'postgres',
  password: 'NsyGQJspjzoIEYjO',
  port: 5432,
});

module.exports = pool;