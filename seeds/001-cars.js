
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 55566677788899911, make: 'Toyota', model: 'Camry', mileage: 40000},
        {VIN: 22233344455566677, make: 'Toyota', model: 'Prius', mileage: 10000},
        {VIN: 11122233344455566, make: 'Ford', model: 'Fusion', mileage: 20000}
      ]);
    });
};
