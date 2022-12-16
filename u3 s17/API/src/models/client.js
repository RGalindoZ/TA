const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    nomb_client: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    ciudad: {
        type: String
    },
    calle: {
        type: String
    },
    numero: {
        type: Number
    },
    estado: {
        type: String
    },
    fecha_nacimiento: {
        type: String
    }
});

module.exports = mongoose.model('CLIENTE', clientSchema);