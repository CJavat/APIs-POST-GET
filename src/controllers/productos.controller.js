const { pool } = require('../connection/connection');

const getProductos = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM productos');
    res.json(rows);
}

const postProductos = async (req, res) => {
    const { nombre_producto, marca_producto, numero_existencias } = req.body;
    const [rows] = await pool.query('INSERT INTO productos (nombre_producto, marca_producto, numero_existencias) VALUES (?, ?, ?)', [nombre_producto, marca_producto, numero_existencias]);
    
    res.status(200).send({ 
        id: rows.insertId,
        nombre_producto,
        marca_producto,
        numero_existencias,
        
    }, res.redirect('/'));
    
}
// UPDATE productos SET nombre_producto='Nuevo valor', marca_producto='Nuevo valor', numero_existencias=2 WHERE id_producto = 1;
const putProductos = async (req, res) => {
    let {id_producto, nombre_producto, marca_producto, numero_existencias} = req.body;
    const [ rows ] = await pool.query(`SELECT * FROM productos WHERE id_producto = ${id_producto}`);
    
    if(rows[0] === undefined) {
        return res.status(500).send('no se encontraron datos');
    }

    const nombreSQL = rows[0].nombre_producto;
    const marcaSQL = rows[0].marca_producto;
    const existenciasSQL = rows[0].numero_existencias;

    if(nombre_producto.length == 0) {nombre_producto = nombreSQL; console.log("nombre cambiado");}
    if(marca_producto.length == 0) {marca_producto = marcaSQL; console.log("marca cambiada");}
    if(numero_existencias.length == 0) {numero_existencias = existenciasSQL; console.log("numero cambiado");}

    await pool.query(`UPDATE productos SET nombre_producto='${nombre_producto}', marca_producto='${marca_producto}', numero_existencias=${numero_existencias} WHERE id_producto = ${id_producto}`);
    res.status(204, res.redirect('/'));
};

const deleteProductos = async (req, res) => {
    const [ result ] = await pool.query('DELETE FROM productos WHERE id_producto = ?', [req.body.id_producto]);

    if(result.affectedRows <= 0) {
        return res.status(404).json({message: 'Producto no encontrado'});
    }
    res.status(204, res.redirect('/'));
};

const deleteAllProducts = async (req, res) => {
    const [ result ] = await pool.query('DELETE * FROM productos');
    console.log(result);
    res.status(204, res.redirect('/'));
};

module.exports.getProductos = getProductos;
module.exports.postProductos = postProductos;
module.exports.putProductos = putProductos;
module.exports.deleteProductos = deleteProductos;
module.exports.deleteAllProducts = deleteAllProducts;