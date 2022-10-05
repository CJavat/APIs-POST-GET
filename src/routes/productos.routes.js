const express = require('express');
const router = express.Router();
const {getProductos, postProductos, putProductos, deleteProductos} = require('../controllers/productos.controller');

router.get('/productos', getProductos);

router.post('/productos', postProductos);

router.put('/productos', putProductos);

router.delete('/productos', deleteProductos);


module.exports.router = router;