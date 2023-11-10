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

module.exports = {
    findAllTienditas
}