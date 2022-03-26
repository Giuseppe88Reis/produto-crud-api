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

//Método para listar os produtos
exports.listAllProduto = async(req, res) => {
    const response = await db.query('SELECT * FROM produto ORDER BY id_produto ASC');
    res.status(200).send(response.rows);
};

//Método para listar os produtos por Id
exports.findProdutoById = async(req, res) => {
    const produtoId = req.params.id;
    const response = await db.query('SELECT * FROM produto WHERE id_produto = $1', [produtoId]);
    res.status(200).send(response.rows);
};

//Método para alterar os produtos por Id
exports.updateProdutoById = async(req, res) =>{
    const produtoId = req.params.id;
    const {nome, preco, quant_est, descricao} = req.body;
    const response = await db.query('UPDATE produto SET nome = $1, preco = $2, quant_est = $3, descricao = $4 WHERE id_produto = $5',  [nome, preco, quant_est, descricao, produtoId]
    );
    res.status(200).send({message: 'Alteração do produto realizada com sucesso!'});
};

//Método para excluir os produtos por Id
exports.deleteProdutoById = async(req, res)=>{
    const produtoId = req.params.id;
    await db.query('DELETE FROM produto WHERE id_produto = $1', [produtoId]);

    res.status(200).send({message: 'Produto excluído com sucesso!'});
};