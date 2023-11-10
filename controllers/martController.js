// Los controladores tienen la logica del negocio
const ModelMart = require('../models/Mart')



const createProduct = (req, res) => {
    ModelMart.createProduct(req.body)
    .then(rows => {
        res.status(201).send({ message: 'Product Created', data: rows})
    })
    .catch (err => {
        res.status(400).send({message:'Error Creating Product', err})
        console.log(err)
    })
}

const modifyProduct = (req, res) => {
    ModelMart.modifyProduct(req.params.idProduct, req.body)
    .then(rows => {
        res.status(201).send({ message: 'Product updated', data: rows})
    })
    .catch (err => {
        res.status(400).send({message:'Error Updating Product', err})
        console.log(err)
    })
}

const findAllProducts = (req, res) => {
    ModelMart.findAllProducts()
    .then(rows => {
        res.status(200).send(rows)
    })
    .catch (err => {
        res.status(400).send({message:'Error listing all Products'})
    })
}

const findOneProduct = (req, res) => {
    ModelMart.findOneProduct(req.params.idProduct)
    .then(row => {
        res.status(200).send(row)
    })
    .catch (err => {
        res.status(400).send({message:'Error One product'})
    })
}


const destroyProduct = (req, res) => {
    ModelMart.destroyProduct(req.params.idProduct)
    .then(row => {
        res.status(204).send()
    })
    .catch (err => {
        res.status(400).send({message:'Error Destroy One product'})
    })
}

const softDeleteProduct = (req, res) => {
    ModelMart.softDeleteProduct(req.params.idProduct)
    .then(row => {
        res.status(204).send()
    })
    .catch (err => {
        res.status(400).send({message:'Error softDelete one product'})
        //console.log (err)
    })
}


module.exports = {
    createProduct,
    modifyProduct,
    findAllProducts,
    findOneProduct,
    destroyProduct,
    softDeleteProduct
}