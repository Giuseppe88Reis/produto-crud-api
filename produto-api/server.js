//Arquivo responsável pela configuração e execução Back-End
const app = require('./src/app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Aplicação sendo executada na porta:', port);
});
