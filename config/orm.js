// import mysql connection
var connection = require('./connection.js');

// function for mysql syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// mysql syntax function
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}
// create orm to handle mysql tasks
var orm = {
    // function to handle table entries
    selectAll: function (tableInput, cb) {
        // create query string to return all rows from table
        var queryString = "SELECT * FROM " + tableInput + ";";
        // run the query
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // function to add one table entry
    insertOne: function(table, cols, vals, cb) {
        // create query string to add one row to the table
        var queryString = "INSERT INTO " + table;
        queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        
        console.log(queryString);

        // run the query
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // function to update one table entry
    updateOne: function(table, objColVals, condition, cb) {
        // create query string to update one entry in the table
        var queryString = "UPDATE " + table;
        queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
        queryString += condition;
        
        console.log(queryString);

        // run the query
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};
module.exports = orm;
