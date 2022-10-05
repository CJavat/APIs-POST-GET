const { pool } = require('../connection/connection');

const getProductos = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM productos');
    res.json(rows);

}

const postProductos = async (req, res) => {
    const { nombre_producto, marca_producto, numero_existencias } = req.body;
    const [rows] = await pool.query('INSERT INTO productos (nombre_producto, marca_producto, numero_existencias) VALUES (?, ?, ?)', [nombre_producto, marca_producto, numero_existencias]);
    res.send({ 
        id: rows.insertId,
        nombre_producto,
        marca_producto,
        numero_existencias 
    });
}

const putProductos = (req, res) => res.send('Actualizando Productos...');

const deleteProductos = (req, res) => res.send('Eliminando Productos...');

module.exports.getProductos = getProductos;
module.exports.postProductos = postProductos;
module.exports.putProductos = putProductos;
module.exports.deleteProductos = deleteProductos;