const ModelClients = require('../models/Clients')

const createClient = (req, res) => {
    ModelClients.createClient(req.body)
    .then(rows => {
        res.status(200).send(rows)
    })
    .catch (err => {
        res.status(400).send({message:'Error creating Client'})
    })
}

const findAllClients = (req, res) => {
    ModelClients.findAllClients()
    .then(rows => {
        res.status(200).send(rows)
    })
    .catch (err => {
        res.status(400).send({message:'Error listing all Clients'})
    })
}

const findOneClient = (req, res) => {
    ModelClients.findOneClient(req.params.idClient)
    .then(row => {
        res.status(200).send(row)
    })
    .catch (err => {
        res.status(400).send({message:'Error finding Client'})
    })
}

const modifyClient = (req, res) => {
    ModelClients.modifyClient(req.params.idClient, req.body)
    .then(rows => {
        res.status(201).send({ message: 'Client updated', data: rows})
    })
    .catch (err => {
        res.status(400).send({message:'Error modifying Client'})
    })
}



const destroyClient = (req, res) => {
    ModelClients.destroyClient(req.params.idClient)
    .then(row => {
        res.status(204).send()
    })
    .catch (err => {
        res.status(400).send({message:'Error Destroy One client'})
    })
}

const softDeleteClient = (req, res) => {
    ModelClients.softDeleteClient(req.params.idClient)
    .then(row => {
        res.status(204).send()
    })
    .catch (err => {
        res.status(400).send({message:'Error softDelete one client'})
        //console.log (err)
    })
}

module.exports = {
    createClient,
    findAllClients,
    findOneClient,
    modifyClient,
    destroyClient,
    softDeleteClient
}