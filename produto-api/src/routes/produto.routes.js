//Arquivo responsável pelas rotas da API
const router = require('express-promise-router')();
const produtoController = require('../controllers/produto.controller');

//Rota responsável por criar um produto
router.post('/produto',produtoController.createProduto);
//Listar todos os produtos
router.get('/produto', produtoController.listAllProduto);
//Listar por Id
router.get('/produto/:id', produtoController.findProdutoById);
//Alterar por Id
router.put('/produto/:id', produtoController.updateProdutoById);
//Excluir por Id
router.delete('/produto/:id', produtoController.deleteProdutoById);


module.exports = router;