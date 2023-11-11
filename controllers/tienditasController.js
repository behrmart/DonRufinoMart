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

module.exports = {
    findAllTienditas,
    findOneTiendita
}