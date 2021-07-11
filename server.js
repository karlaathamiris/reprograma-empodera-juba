const app = require('./src/app')
const PORT = process.env.PORT || 4545
  
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})