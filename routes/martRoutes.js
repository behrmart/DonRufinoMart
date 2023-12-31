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
router.get ('/tienditas', tienditasController.findAllTienditas)
router.get ('/tienditas/:idTiendita', tienditasController.findOneTiendita)
router.post ('/tienditas', tienditasController.createTiendita)
router.patch ('/tienditas/:idTiendita', tienditasController.modifyTiendita)
router.delete ('/tienditas/:idTiendita', tienditasController.softDeleteTiendita)
router.delete ('/tienditas/destroy/:idTiendita', tienditasController.destroyTiendita)

module.exports = router