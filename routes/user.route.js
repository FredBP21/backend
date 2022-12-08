let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let userSchema = require('../models/User')

// CRUD
// Read Users
router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Users
router.route('/:id').get((req, res, next) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Users
router.route('/edit/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
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


// Login Users
router.route('/login').post((req, res, next) => {
    userSchema.find({
        username: req.body.username,
        password: req.body.password
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router