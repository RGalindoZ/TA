const express = require("express");
const clientSchema = require("../models/client");

const router = express.Router();

// create client
router.post('/clientes', (req, res) =>{
    const client = clientSchema(req.body);
    client
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
})

// get all clients
router.get('/clientes', (req, res) =>{
    clientSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
})

// get a client
router.get('/clientes/:id', (req, res) =>{
    const { id } = req.params;
    clientSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
})

// update a client
router.put('/clientes/:id', (req, res) =>{
    const { id } = req.params;
    const { nomb_client, telefono, ciudad, calle, numero, estado, fecha_nacimiento } = req.body;
    clientSchema
        .updateOne({ _id: id }, { $set: { nomb_client, telefono, ciudad, calle, numero, estado, fecha_nacimiento }})
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
})

// delete a client
router.delete('/clientes/:id', (req, res) =>{
    const { id } = req.params;
    clientSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
})

module.exports = router;