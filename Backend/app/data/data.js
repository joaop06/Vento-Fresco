const mysql = require("mysql2")

const db = new mysql.createConnection({
    host: "localhost",
    user: "ventofresco",
    password: "ventofresco",
    database: "ventofresco"
})

module.exports = db