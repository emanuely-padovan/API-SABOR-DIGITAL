const pool = require('../config/database');

class PedidoRepository {
    async encontrarPedidos() {
        const [lista] = await pool.query('SELECT * FROM pedido');
        return lista;
    }

    async encontrarPedidosPorId(id) {
        const [rows] = await pool.query('SELECT * FROM pedido WHERE id = ?', [id]);
        return rows[0];
    }

    async create(dados) {
        const { cliente, status_pedido, total } = dados;
        const [result] = await pool.query(
            'INSERT INTO pedido (cliente, status_pedido, total) VALUES (?, ?, ?)',
            [cliente, status_pedido, total]
        );
        return result.insertId;
    }

    async atualizar(id, dados) {
        const fields = [];
        const values = [];
        for (const [key, value] of Object.entries(dados)) {
            fields.push(`${key} = ?`);
            values.push(value);
        }
        if (fields.length === 0) return null;

        values.push(id);
        const query = `UPDATE pedido SET ${fields.join(', ')} WHERE id = ?`;
        const [result] = await pool.query(query, values);
        return result.affectedRows;
    }

    async delete(id) {
        const [result] = await pool.query('DELETE FROM pedido WHERE id = ?', [id]);
        return result.affectedRows;
    }
}

module.exports = new PedidoRepository();