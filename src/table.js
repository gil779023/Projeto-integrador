const con = require("./conexao")

const paciente = con.sequelize.define('Paciente',{
    nome:{
        type:con.Sequelize.STRING
    },
    sobrenome:{
        type:con.Sequelize.STRING
    },
    municipio:{
        type:con.Sequelize.STRING
    },
    estado:{
        type:con.Sequelize.STRING
    },
    nascimento:{
        type:con.Sequelize.DATE
    },
    idade:{
        type:con.Sequelize.DOUBLE
    },
    cpf:{
        type:con.Sequelize.DOUBLE
    },
    email:{
        type:con.Sequelize.STRING
    }


});

const adm = con.sequelize.define('Administrador',{
    id :{
        type:con.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey : true
    },
    nome:{
        type:con.Sequelize.STRING
    },
    senha:{
        type:con.Sequelize.DOUBLE
    }
});

//adm.sync({force:true})  //cuidado pode apagar tudo se for ativado

module.exports = paciente,adm;
