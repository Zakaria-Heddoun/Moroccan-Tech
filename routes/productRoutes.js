const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.getAllProducts);
router.patch('/products/:id', productController.updateProduct);
router.delete('/products', productController.deleteProduct);

module.exports = router;
