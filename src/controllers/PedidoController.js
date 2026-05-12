const PedidoService = require('../services/PedidoService')

class PedidoController {
    async listar (req, res) {
        try {
            const resultado = await PedidoService.listarPedidos()
            res.json(resultado)
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor"
            })
        }
    }
    async buscarPorId (req, res) {
        try {
            const resultado = await PedidoService.buscarPedidoPorId(req.params.id)
            res.json(resultado)
        } catch (error) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor"
            })
        }
    }
    async cadastrar (req, res) {
        try {
            const resultado = await PedidoService.cadastrarpedido(req.body)
            res.status(201).json(resultado)
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
            })
        }
    }
    async atualizar (req, res) {
        try {
            const resultado = await PedidoService.atualizarPedido(req.params.id, req.body)
            res.json(resultado)
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
            })
        }
    }
    async deletar (req, res) {
        try {
            const resultado = await PedidoService.deletarPedido(req.body)
            res.json(resultado)
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
            })
        }
    }
}

module.exports = new PedidoController()