import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3', // Qual banco vou utilizar(é preciso installar o sqlite com npm)
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite'), //em qual arquivo vai ser armazenado o BD
        //__dirname, retorna o camindo do diretório q está sendo chamado
    },

    useNullAsDefault: true
});

//Migrations = Histórico do banco de dados

export default connection;