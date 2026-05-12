const express = require('express')
const router = express.Router()

const produtoRoutes = require('./ProdutoRoutes')
const pedidosRoutes = require('./PedidoRoutes')

router.get('/', (req, res) => {
    res.json ({
        mensagem: "API Sabor Digital funcionando!",
        versao: "1.0.0",
        arquitetura: "MVC + SOLID"
    })
})

router.use('/produtos', produtoRoutes)
router.use('/pedidos', pedidosRoutes)

module.exports = router