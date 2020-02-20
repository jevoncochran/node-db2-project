
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl
        .integer("VIN", 17)
        .notNullable();

    tbl
        .string("make", 256)
        .notNullable();

    tbl
        .string("model", 256)
        .notNullable();
    
    tbl
        .integer("mileage")
        .notNullable();

    
  })
};



exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
