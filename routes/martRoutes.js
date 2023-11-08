const express = require('express')
const router = express.Router()
const martController = require('../controllers/martController')

// Si la ruta es Marts, ejecute MartControllers y la funcion createMart VISTA

//router.post ('/mart', martController.createMart)

//router.get ('/mart/:idMart', martController.findOneMart)
//router.patch ('/mart/:idMart', martController.updateMart)
//router.delete ('/mart/:idMart', martController.softDeleteOneMart)
//router.delete ('/mart/destroy/:idMart', martController.destroyOneMart)

router.post ('/products', martController.createProduct)
router.patch ('/products/:idProduct', martController.modifyProduct)
router.get ('/products', martController.findAllProducts)
router.get ('/products/:idProduct', martController.findOneProduct)
router.delete ('/products/:idProduct', martController.softDeleteProduct)
router.delete ('/products/destroy/:idProduct', martController.destroyProduct)

//router.get ('/clients', martController.findAllClients)

module.exports = router