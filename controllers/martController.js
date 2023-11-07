// Los controladores tienen la logica del negocio
const ModelMart = require('../models/Mart')



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
        res.status(400).send({message:'Error Destroy One home'})
    })
}

const softDeleteProduct = (req, res) => {
    ModelMart.softDeleteProduct(req.params.idHome)
    .then(row => {
        res.status(204).send()
    })
    .catch (err => {
        res.status(400).send({message:'Error soft Delete One home'})
    })
}


module.exports = {
    
    findAllProducts,
    findOneProduct,
  
    destroyProduct,
    softDeleteProduct
}