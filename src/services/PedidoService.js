const PedidoRepository = require('../repositories/PedidoRepository')

class PedidoService {
    async listarPedidos() {
        const pedidos = await PedidoRepository.encontrarPedidos()
        return {
            sucesso: true,
            dados: pedidos,
            total: pedidos.length
        }
    }
    async buscarPedidoporId(id) {
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                mensagem: "ID inválido."
            }
        }

        const pedido = await PedidoRepository.encontrarPedidosPorId(id)
        if (!pedido) {
            throw {
                status: 404,
                mensagem: "Pedido não encontrado!"
            }
        }

        return {
            sucesso: true,
            dados: pedido
        }
    }
    async cadastrarPedido (dados) {
        const {cliente, status_pedido, total} = dados

        if (typeof total !== "number" || preco <= 0) {
            throw {
                status: 400,
                mensagem: "Total deve ser um número positivo."
            }
        }

        const novoPedido = {
            cliente: cliente,
            status_pedido: status_pedido,
            total,
        }

        const id = await PedidoRepository.create(novoPedido)
        return {
            sucesso: true,
            mensagem: "Pedido cadastrado com sucesso.",
            id
        }
    }
    async atualizarPedido(id, dados) {
        if (!id || isNaN(id)) {
            throw {
                status: 400,
                mensagem: "ID inválido."
            }
        }

        const existe = await PedidoRepository.encontrarPedidosPorId(id)
        if (!existe) {
            throw {
                status: 404,
                mensagem: "Pedido não encontrado!"
            }
        }

        const atualizado = {}
        const {cliente, status_pedido, total} = dados
        
        if (cliente !== undefined) atualizado.cliente = cliente;
        if (status_pedido !== undefined) atualizado.status_pedido = status_pedido()
        if (total !== undefined) {
            if (typeof total !== "number" || total <= 0) {
                throw { 
                    status: 400, 
                    mensagem: "Preço deve ser um número positivo" 
                }
            }
            atualizado.total = total
        }

        if (Object.keys(atualizado).length === 0) {
            throw { 
                status: 400, 
                mensagem: "Nenhum dado válido enviado para atualização" 
            }
        }

        await PedidoRepository.atualizar(id, atualizado)

        return {
            sucesso: true,
            mensagem: "Pedido atualizado com sucesso"
        }
    }
    async deletarPedido(id) {
        if (!id || isNaN(id)) {
            throw { 
                status: 400, 
                mensagem: "ID inválido" 
            }
        }

        const existe = await PedidoRepository.encontrarPedidosPorId(id)
        if (!existe) {
            throw {
                status: 404,
                mensagem: "Pedido não encontrado!"
            }
        }

        await PedidoRepository.delete(id)

        return {
            sucesso: true,
            mensagem: "Pedido apagado com sucesso"
        }
    }
}

module.exports = new PedidoService()