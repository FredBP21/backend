const mongoose = require('mongoose')
const Schema = mongoose.Schema

let pedidoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        min: 868,
        required: true,
    },
    readAt: {
        type: Date
    },
    pedidoId: {
        type: Schema.Types.ObjectId, ref: 'Pedido'
    }
}, {
    collection: 'Pedido'
})

module.exports = mongoose.model('Pedido', pedidoSchema)