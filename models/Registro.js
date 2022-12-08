const mongoose = require('mongoose')
const Schema = mongoose.Schema

let registroSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
    clienteId: {
        type: Schema.Types.ObjectId, ref: 'Registro'
    }
}, {
    collection: 'Registro'
})

module.exports = mongoose.model('Registro', registroSchema)