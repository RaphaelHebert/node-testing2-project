
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.string('username', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
