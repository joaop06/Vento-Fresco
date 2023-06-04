const connection = require("../data/data")

module.exports = class ScoreController {

    /* Users */
    async findUsersLogin(req, res) {
        try {
            const { email, user_name, password } = req.body
            connection.query(`SELECT * FROM users WHERE (email = ${email} OR user_name = ${user_name}) AND password = ${password}`, function (err, rows) {
                if (!err) {
                    if (rows.length > 0) {
                        res.status(200).json({ message: "Login realizado com sucesso!", data: rows })
                    }
                }
            })
        } catch (err) {
            res.status(500).json({ message: "Erro ao realizar o login" })
        }

    }

    async createUsers(req, res) {
        try {
            const { name, email, user_name, password, position } = req.body
            connection.query(`INSERT INTO users ('${name}', '${email}', '${user_name}', '${password}', ${position})`, function (err) {
                if (!err) {
                    res.status(200).json({ message: "Usuário criado com sucesso!" })
                }
            })
        } catch (err) {
            res.status(500).json({ message: "Erro ao criar o usuário" })
        }
    }


    /************************************************/
    /* Products */
    async createProducts(req, res) {
        try {
            let { name, price, description, image } = req.body
            if (![null, undefined].includes(name) ||
                ![null, undefined].includes(price) ||
                ![null, undefined].includes(description) ||
                ![null, undefined].includes(image)) {
                connection.query(`INSERT INTO products (name, price, description, image) VALUES ('${name}', ${price}, '${description}', '${image}')`, function (err) {
                    if (!err) {
                        res.status(200).json({ message: "Produto criado com sucesso!" })
                    }
                })

            } else {
                res.status(400).json({ message: "Dados do produto incompletos" })
            }

        } catch (err) {
            res.status(500).json({ message: "Erro ao criar o produto" })
        }
    }

    async updateProducts(req, res) {
        try {
            const id = req.query.id ? req.query.id : undefined

            if (![null, undefined].includes(id)) {
                connection.query(`SELECT * FROM products WHERE id = ${id}`, function (err, rows) {
                    if (!err) {
                        if (rows.length > 0) {
                            let { name, price, description, image } = req.body
                            if (description == undefined) {
                                description = rows[0].description
                            }
                            connection.query(`UPDATE products SET name = '${name}', price = ${price}, description = '${description}', image = '${image}' WHERE id = ${id}`, function (err) {
                                if (!err) {
                                    res.status(200).json({ message: "Produto atualizado com sucesso!" })
                                } else {
                                    res.status(500).json({ message: "Erro ao atualizar o produto" })
                                }
                            })
                        } else {
                            res.status(404).json({ message: "Produto não encontrado" })
                        }
                    }
                })
            }

        } catch (err) {
            res.status(500).json({ message: "Erro ao criar o produto" })
        }
    }

    async deleteProducts(req, res) {

    }

    async findAllProducts(req, res) {
        try {
            connection.query("SELECT * FROM products", function (err, rows) {
                if (!err) {
                    if (rows.length > 0) {
                        res.status(200).json({ message: "Produtos encontrados", data: rows })
                    } else {
                        res.status(204).json({ message: "Não há produtos cadastrados" })
                    }
                }

            })
        } catch (err) {
            res.status(500)
        }
    }


    /************************************************/
    /* Requests */
    async findAllRequests(req, res) {

    }

    async findRequests(req, res) {

    }

    async createRequests(req, res) {

    }

    async updateRequests(req, res) {

    }



    /************************************************/
    /* Clients */
    async findClientLogin(req, res) {

    }

    async findAllClients(req, res) {

    }

    async createClients(req, res) {
        try {
            const { name, email, password, cell_phone } = req.body
            console.log(req.body)
            connection.query(`INSERT INTO clients (name, email, password, cell_phone) VALUES ('${name}', '${email}', '${password}', ${cell_phone})`, function (err) {
                if (!err) {
                    res.status(200).json({
                        message: "Cadastro realizado com sucesso!"
                    })
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    async updateClients(req, res) {

    }
}
