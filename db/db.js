const Sequelize = require('sequelize');
const sequelize = new Sequelize ('cadastro', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
});


sequelize.authenticate()
    .then(function() {
        console.log('BD conectado com sucesso.')
    }).catch(function(erro){        
        console.log(`Conexão nao realizada ${erro}`)
    });

    module.exports = sequelize;