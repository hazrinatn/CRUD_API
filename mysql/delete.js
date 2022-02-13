const db = require('../config/db')

let deleteQuery = `DELETE FROM store WHERE id = ?`
let data = [1]
db.query(deleteQuery, data, function(err, deleted) {
    if (err) throw err;
    console.log(deleted);
});