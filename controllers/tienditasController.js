const ModelTienditas = require('../models/Tienditas')

const findAllTienditas = (req, res) => {
    ModelTienditas.findAllTienditas()
    .then(rows => {
        res.status(200).send(rows)
    })
    .catch (err => {
        res.status(400).send({message:'Error listing all Tienditas'})
    })
}

const findOneTiendita = (req, res) => {
    ModelTienditas.findOneTiendita(req.params.idTiendita)
    .then(row => {
        res.status(200).send(row)
    })
    .catch (err => {
        res.status(400).send({message:'Error finding Tiendita'})
    })
}

const createTiendita = (req, res) => {
    ModelTienditas.createTiendita(req.body)
    .then(rows => {
        res.status(200).send(rows)
    })
    .catch (err => {
        res.status(400).send({message:'Error creating Tiendita'})
    })
}

const modifyTiendita = (req, res) => {
    ModelTienditas.modifyTiendita(req.params.idTiendita, req.body)
    .then(rows => {
        res.status(201).send({ message: 'Tiendita updated', data: rows})
    })
    .catch (err => {
        res.status(400).send({message:'Error modifying Tiendita', err})
    })
}

module.exports = {
    findAllTienditas,
    findOneTiendita,
    createTiendita,
    modifyTiendita
}