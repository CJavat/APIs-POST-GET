const express = require('express');
const router = express.Router();
const {getProductos, postProductos, putProductos, deleteProductos, deleteAllProducts} = require('../controllers/productos.controller');

router.get('/productos', getProductos);

router.post('/productos', postProductos);

// router.put('/productos', putProductos);
router.post('/productosput', putProductos);

// router.delete('/productosdel', deleteProductos); // NO HE ENCONTRADO EL MÉTODO PARA EL .delete
router.post('/productosdel', deleteProductos);

router.post('/productos', deleteAllProducts);

module.exports.router = router;