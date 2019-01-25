let connection = require("./connection.js");

let orm = {
    selectAll: function(tableInput, coltoSearch, itemVal) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, coltoSearch, itemVal], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },

    insertOne: function(tableInput, coltoSearch, newItem) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, coltoSearch, newItem], function (err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
    
    updateOne: function(tableInput, coltoSearch, newValue, idNum, itemId) {
        var queryString =  "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, coltoSearch, newValue, idNum, itemId], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;