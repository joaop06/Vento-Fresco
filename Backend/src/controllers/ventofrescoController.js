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
        try {
            const id = req.query.id ? req.query.id : undefined
            connection.query(`DELETE FROM products WHERE id = ${id}`, function (err) {
                if (!err) {
                    res.status(200).json({ message: "Produto deletado com sucesso!" })
                }
            })
        } catch (err) {
            res.status(500).json({ message: "Erro ao deletar o produto" })
        }

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
        try {
            connection.query(`SELECT r.id AS id_request, c.name AS Name, r.value AS value, GROUP_CONCAT(p.name SEPARATOR ', ') AS products FROM clients c INNER JOIN requests r ON c.id = r.client_id_fk INNER JOIN requestsProducts rp ON r.id = rp.request_id INNER JOIN products p ON rp.product_id = p.id GROUP BY r.id;`, function (err, rows) {
                if (!err) {
                    if (rows.length > 0) {
                        res.status(200).json({ message: "Pedidos encontrados", data: rows })
                    } else {
                        res.status(204).json({ message: "Não há pedidos cadastrados" })
                    }
                }
            })
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar os pedidos" })
        }
    }

    async findAllClientRequests(req, res) {
        try {
            const id = req.query.id ? req.query.id : undefined
            if (id) {
                connection.query(`SELECT r.id AS id_request, r.value AS value, GROUP_CONCAT(p.name SEPARATOR ', ') AS products FROM requests r INNER JOIN requestsProducts rp ON r.id = rp.request_id INNER JOIN products p ON rp.product_id = p.id WHERE r.client_id_fk = ${id} GROUP BY r.id;`, function (err, rows) {
                    if (!err) {
                        if (rows.length > 0) {
                            for (let i = 0; i < rows.length; i++) {
                                rows[i].products = rows[i].products.split(", ")
                            }
                            res.status(200).json({ message: "Pedidos encontrados", data: rows })
                        } else {
                            res.status(204).json({ message: "Não há pedidos cadastrados" })
                        }
                    }
                })
            } else {
                res.status(404).json({ message: "ID do cliente não informado" })
            }
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar pedidos" })
        }
    }

    async createRequests(req, res) {
        try {
            const id = req.query.id ? req.query.id : undefined
            if (id) {
                const { value, products } = req.body
                if (value && products) {
                    connection.query(`INSERT INTO requests VALUES (null, ${id}, ${value})`, function (err, rows) {
                        if (!err) {
                            const requests_id = rows.insertId
                            for (let i = 0; i < products.length; i++) {
                                connection.query(`INSERT INTO requestsProducts VALUES (null, ${requests_id}, ${products[i]})`, function (err) {
                                    if (err) {
                                        res.status(500).json({ message: "Erro ao criar pedido" })
                                    }
                                })
                            }
                            res.status(200).json({ message: "Pedido criado com sucesso" })

                        } else { res.status(500).json({ message: "Erro ao criar pedido" }) }
                    })
                } else { res.status(400).json({ message: "Informações faltantes do pedido" }) }

            } else { res.status(400).json({ message: "Cliente não informado" }) }
        } catch (err) {

        }

    }

    async deleteRequests(req, res) {
        try {
            const requests_id = req.query.requests_id ? req.query.requests_id : undefined
            connection.query(`DELETE FROM requestsProducts WHERE requests_id = ${requests_id}`, function (err) {
                if (!err) {
                    connection.query(`DELETE FROM requests WHERE id = ${requests_id}`, function (err) {
                        if (!err) {
                            res.status(200).json({ message: "Pedido deletado com sucesso" })
                        }
                    })
                }
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Erro ao deletar pedido" })
        }
    }



    /************************************************/
    /* Clients */
    async findClientLogin(req, res) {
        try {
            const { email, password } = req.body
            connection.query(`SELECT * FROM clients WHERE email = ${email} AND password = ${password}`, function (err, rows) {
                if (!err) {
                    if (rows.length > 0) {
                        res.status(200).json({ message: "Login realizado!", data: rows })
                    } else {
                        res.status(204).json({ message: "E-mail e/ou senha incorretos" })
                    }
                }
            })
        } catch (err) {
            res.status(500).json({ message: "Erro ao realizar o login" })
        }
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
