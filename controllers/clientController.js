const ModelClients = require('../models/Clients')

const findAllClients = (req, res) => {
    ModelClients.findAllClients()
    .then(rows => {
        res.status(200).send(rows)
    })
    .catch (err => {
        res.status(400).send({message:'Error listing all Clients'})
    })
}

module.exports = {
    findAllClients
}