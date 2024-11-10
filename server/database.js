var mysql = require('mysql');
try {
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
//database conn