
exports.up = function(knex) {
    return knex.schema.alterTable("cars", tbl => {
        tbl.string("transmission_type")

        tbl.string("title_status")
      })
};

exports.down = function(knex) {
    return knex.schema.alterTable("cars", tbl => {
        tbl.dropColumn("transmission_type", "title_status")
    })
};
