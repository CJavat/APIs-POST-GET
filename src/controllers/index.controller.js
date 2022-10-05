const { pool } = require('../connection/connection');

const ping = async (req, res) => { 
    const [consulta] = await pool.query('SELECT * FROM productos');
    res.send(consulta);
}

module.exports.ping = ping;