const connection = require("../data/data")

module.exports = class ScoreController {

    async findAll(req, res) {
        try {
            connection.query("SELECT * FROM Produtos", function (err, rows) {
                res.status(200).json({
                    rows
                })
            })
        } catch (err) {
            console.log(err)
        }
    }


    async createClient(req, res){
        try{
            const {name, email, password, cell_phone} = req.body
            console.log(req.body)
            connection.query(`INSERT INTO client VALUES (null, '${name}', '${email}', '${password}', ${cell_phone}, null, null)`, function(err, rows){
                if(!err){
                    res.status(200).json({
                        message: "Cadastro realizado com sucesso!"
                    })
                }
            })
        } catch (err){
            console.log(err)
        }
    }
}
