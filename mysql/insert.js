const db = require('../config/db')

let data = [
    [7, "4th order", 1, "placed"],
    [3, "5th order", 1, "placed"],
    [2, "6th order", 2, "placed"],
    [6, "7th order", 1, "placed"],
    [7, "8th order", 2, "placed"],
]

data.forEach(value => {
    let insertQuery = `INSERT INTO store (petId, description, quantity, status) VALUES (?);`
    db.query(insertQuery, [value], function(error, results, fields) {
        if (error) throw error;
        console.log('Data has been inserted');
    });
});