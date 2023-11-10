const express = require('express')
const router = express.Router()
const martController = require('../controllers/martController')
const clientController = require ('../controllers/clientController')
const tienditasController = require ('../controllers/tienditasController')

//  VISTA

// Product endpoints
router.post ('/products', martController.createProduct)
router.patch ('/products/:idProduct', martController.modifyProduct)
router.get ('/products', martController.findAllProducts)
router.get ('/products/:idProduct', martController.findOneProduct)
router.delete ('/products/:idProduct', martController.softDeleteProduct)
router.delete ('/products/destroy/:idProduct', martController.destroyProduct)

//Client endpoints
router.post ('/clients', clientController.createClient)
router.patch ('/clients/:idClient', clientController.modifyClient)
router.get ('/clients', clientController.findAllClients)
router.get ('/clients/:idClient', clientController.findOneClient)
router.delete ('/clients/:idClient', clientController.softDeleteClient)
router.delete ('/clients/destroy/:idClient', clientController.destroyClient)

//Tienditas endpoints
//router.post ('/tienditas', tienditasController.createTiendita)
router.get ('/tienditas', tienditasController.findAllTienditas)


module.exports = router