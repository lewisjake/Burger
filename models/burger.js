// import orm
var orm = require('../config/orm.js');

// create burger object
var burger = {
    // select all burgers table data
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    // the variables cols and vals are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },

    // the objValsCols variable specifies columns with associated values
    updateOne: function(objValsCols, condition, cb) {
        orm.updateOne('burgers', objValsCols, condition, function(res) {
            cb(res);
        });
    }
};

// export functions for the controller
module.exports = burger;