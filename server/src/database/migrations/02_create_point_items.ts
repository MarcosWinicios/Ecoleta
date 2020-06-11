import Knex from 'knex';

export async function up(knex: Knex){ // informando que a variável knex é do tipo Knex(importado)
    //CRIAR A TABELA
   return knex.schema.createTable('point_itens', table =>{
        table.increments('id').primary();
        //Fazendo a ligação com chaves estrangeiras
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

export async function down(knex: Knex){
    //VOLTAR ATRAS(DELETAR A TABELA) CORRIGIR ERROS
   return knex.schema.dropTable('point_itens');
}
