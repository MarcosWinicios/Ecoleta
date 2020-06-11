import path from 'path';

module.exports = {
    client: 'sqlite3', // Qual banco vou utilizar(é preciso installar o sqlite com npm)
    connection:{
        filename: path.resolve(__dirname,'src', 'database', 'database.sqlite'), //em qual arquivo vai ser armazenado o BD
        //__dirname, retorna o camindo do diretório q está sendo chamado
    },

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },

    useNullAsDefault: true, //Faz com que aceite valores padrões ao inserir dados
};