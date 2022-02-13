const db = require('../config/db')

let createQuery = `
CREATE TABLE IF NOT EXISTS store (
	id INT(11) NOT NULL AUTO_INCREMENT,
  	petId INT(11) NOT NULL,
	description VARCHAR(50) NULL DEFAULT NULL COLLATE utf8mb4_general_ci,
  	quantity INT,
	shipDate DATETIME NULL DEFAULT current_timestamp(),
	status VARCHAR(50) NULL DEFAULT NULL,
	PRIMARY KEY (id) USING BTREE
)
COLLATE=utf8mb4_general_ci,
ENGINE=InnoDB
AUTO_INCREMENT=1
;
`
db.query(createQuery, function(error, results, fields) {
    if (error) throw error;
    console.log('Table has been created');
});

db.end();