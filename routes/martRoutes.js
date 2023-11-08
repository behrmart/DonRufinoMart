const express = require('express')
const router = express.Router()
const martController = require('../controllers/martController')
const clientController = require ('../controllers/clientController')

//  VISTA

// Product endpoints
router.post ('/products', martController.createProduct)
router.patch ('/products/:idProduct', martController.modifyProduct)
router.get ('/products', martController.findAllProducts)
router.get ('/products/:idProduct', martController.findOneProduct)
router.delete ('/products/:idProduct', martController.softDeleteProduct)
router.delete ('/products/destroy/:idProduct', martController.destroyProduct)

//Client endpoints
router.get ('/clients', clientController.findAllClients)

module.exports = router