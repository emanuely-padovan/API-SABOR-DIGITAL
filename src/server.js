const app = require ('./app')
const pool = require ('./config/database')
const PORT = process.env.PORT || 3000

async function iniciarServidor() {
    try {
        const connection = await pool.getConnection()
        console.log("Conectado ao Banco de Dados.")
        connection.release()

        app.listen (PORT, () => {
            console.log("Servidor rodando!")
            console.log("Rotas MVC ativas e escutando.")
        })
    } catch (error) {
        console.error("Erro fatal ao se conectar com o Banco de Dados: ", error)
        process.exit(1)
    }
}

iniciarServidor()