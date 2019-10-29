// import mysql connection
var connection = require('./connection.js');

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
