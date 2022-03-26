//Arquivo responsável pela lógica do CRUD
const db = require('../config/database');

//Método de criação de um produto
exports.createProduto = async(req,res) => {
    const {nome, preco, quant_est, descricao} = req.body;
    const{rows} = await db.query(
        "INSERT INTO produto (nome, preco, quant_est, descricao) VALUES ($1, $2, $3, $4)",
        [nome, preco, quant_est, descricao]
    );
    res.status(201).send({
        message: 'Produto cadastrado com sucesso!',
        body: {
            produto: {nome, preco, quant_est, descricao}
        },
    });
};