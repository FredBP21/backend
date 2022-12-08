let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let registroSchema = require('../models/Pedido')

// CRUD

// Create
router.route('/create').post((req, res, next) => {
    registroSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read
router.route('/').get((req, res, next) => {
    registroSchema.find({ userId: req.query.userId }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read 
router.route('/:id').get((req, res, next) => {
    registroSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update
router.route('/edit/:id').put((req, res, next) => {
    registroSchema.findByIdAndUpdate(req.params.id, {
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
    registroSchema.findByIdAndRemove(req.params.id, (error, data) => {
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