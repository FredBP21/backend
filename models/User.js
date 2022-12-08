const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    correo: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)