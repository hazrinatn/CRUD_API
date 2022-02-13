const db = require('../config/db')

let updateQuery = `UPDATE store SET description = ? WHERE id = ?`;

let data = ["My Order", 2]
db.query(updateQuery, data, function(err, updated) {
    if (err) throw err;
    console.log(updated);
});