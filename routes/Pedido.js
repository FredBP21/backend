let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let pedidoSchema = require('../models/Pedido')

// CRUD

// Create
router.route('/create').post((req, res, next) => {
    pedidoSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read
router.route('/').get((req, res, next) => {
    pedidoSchema.find({ userId: req.query.userId }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read 1
router.route('/:id').get((req, res, next) => {
    pedidoSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update
router.route('/edit/:id').put((req, res, next) => {
    pedidoSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('Student updated successfully !')
            res.json(data)
        }
    })
})

// Delete
router.route('/delete/:id').delete((req, res, next) => {
    pedidoSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router