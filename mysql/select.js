const db = require('../config/db')

let selectQuery = `SELECT * FROM store`
db.query(selectQuery, function(error, results, fields) {
    if (error) throw error;
    console.log('List Order: ', results);
});