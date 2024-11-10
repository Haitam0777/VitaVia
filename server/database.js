var mysql = require('mysql2');
/* try {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database:'vitavia'
    });
    connection.connect((err)=>{
      if(err){
        throw err;
      }
    });
    console.log("database is connected !")
} catch (error) {
    console.log(error)
}
module.exports = connection; 
//database conn */

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'vitavia',
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database is connected!');
  }
});

module.exports = connection;