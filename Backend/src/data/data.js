const mysql = require("mysql2")

const connection = new mysql.createConnection({
    host: 'localhost',
    user: 'ventofresco',
    password: 'ventofresco',
    database: 'ventofresco',
})

module.exports = connection
