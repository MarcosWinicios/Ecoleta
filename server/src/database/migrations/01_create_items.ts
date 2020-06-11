import Knex from 'knex';

export async function up(knex: Knex){ // informando que a variável knex é do tipo Knex(importado)
    //CRIAR A TABELA
   return knex.schema.createTable('items', table =>{
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    });
}

export async function down(knex: Knex){
    //VOLTAR ATRAS(DELETAR A TABELA) CORRIGIR ERROS
   return knex.schema.dropTable('items');
}
