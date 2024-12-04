const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  if (req.url === '/lento') {
    setTimeout(() => {
      res.end('Esta respuesta tardó 5 segundos')
    }, 5000)
  } else {
    res.end('respuesta rapida')
  }
})

server.listen(3001, () => {
  console.log('Servidor ejecutandose en http://localhost:3001')
})
