
exports.up = function(knex) {
 return knex.schema
  .createTable('project', tbl => {
      tbl.increments('id').primary();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 255);
      tbl.boolean('completed').defaultTo(0).notNullable();
  })

  .createTable('task', tbl => {
      tbl.increments('id').primary();
      tbl.string('description', 255).notNullable();
      tbl.string('notes', 255);
      tbl.boolean('completed').defaultTo(0).notNullable();
      tbl.integer('projectId').notNullable()
      .references('id')
      .inTable('project')

  })

  .createTable('resource', tbl => {
      tbl.increments('id').primary();
      tbl.string('name', 255).unique().notNullable();
      tbl.string('description', 255);
  })

  .createTable('conjunction', tbl => {
      tbl.integer('projectId')
      .references('id')
      .inTable('project');
      tbl.integer('resourceId')
      .references('id')
      .inTable('resource')
      
  })
};

exports.down = function(knex) {
 return knex.schema
  .dropTableIfExists('project')
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('conjunction')
};
