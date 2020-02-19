const express = require('express');

const db = require('../data/car-dealer.db3');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
        .from('cars')
        .then()
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'could not retrieve cars' });
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars')
        .where({ id: id })
        .first()
        .then(car => {
            if (!car) {
                res.status(404).json({ error: 'could not find car with the specified id' });
            } else {
                res.status(200).json(car);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'could not retrieve car' });
        })
})

router.post('/', (req, res) => {
    const carBody = req.body;
    const { VIN, make, model, mileage } = carBody

    if (!VIN || !make || !model || !mileage) {
        res.status(400).json({ error: 'VIN number, make, model and mileage required to enter car into database' });
    } else {
        db('cars')
            .insert(carBody, "id")
            .then(ids => {
                res.status(201).json(ids);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ errorMessage: 'could not add car' });
            })
    }
})

router.put ('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const { VIN, make, model, mileage } = changes
    
    if (!VIN || !make || !model || !mileage) {
        res.status(400).json({ error: 'VIN number, make, model and mileage are required fields' });
    } else {
        db('cars')
            .where({ id })
            .update(changes)
            .then(count => {
                res.status(200).json(count);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ errorMessage: 'could not update car' });
            })
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('cars')
        .where({ id })
        .del()
        .then(count => {
            if(!count) {
                res.status(404).json({ error: 'car with the specified id not found' });
            } else {
                res.status(200).json(count);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'could not delete car' });
        })
})

module.exports = router;