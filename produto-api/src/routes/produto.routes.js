//Arquivo responsável pelas rotas da API
const router = require('express-promise-router')();
const produtoController = require('../controllers/produto.controller');

//Rota responsável por criar um produto
router.post('/produto',produtoController.createProduto);

module.exports = router;