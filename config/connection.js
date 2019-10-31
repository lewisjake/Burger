// dependencies
var mysql = require("mysql");

// connection to mysql
var connection;

connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'Redsox4093!',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.error("Error: MySql connection error -- " + err.stack + '\n');
        return;
    }
    console.log("Connected to MySql database as id " + connection.threadId + '\n')
});

// export for ORM use
module.exports = connection;
