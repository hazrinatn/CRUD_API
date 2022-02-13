const db = require('../config/db')

function insertOrder(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO store (description) VALUES (?);`

    db.query(insertQuery, data.description, function(error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}


function listOrder(req, res) {
    let selectQuery = `SELECT * FROM store`

    db.query(selectQuery, function(error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}


function updateOrder(req, res) {
    let updateQuery = `UPDATE store SET description = ? WHERE id = ?`
    let data = [req.body.description, req.params.id]

    db.query(updateQuery, data, function(error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function deleteOrder(req, res) {
    let deleteQuery = `DELETE FROM store WHERE id = ?`
    let data = [req.params.id]

    db.query(deleteQuery, data, function(error, deleted) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertOrder,
    listOrder,
    updateOrder,
    deleteOrder
}