const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const PORT = 3000

app.use(cors())

app.get('/dados', (req, res) => {
  fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err)
      return res.status(500).json({ erro: 'Erro ao ler o arquivo' })
    }

    try {
      const jsonData = JSON.parse(data)
      res.json(jsonData)
    } catch (parseError) {
      res.status(500).json({ erro: 'Erro ao interpretar o JSON' })
    }
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
