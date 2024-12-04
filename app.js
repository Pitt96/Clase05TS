const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200 //estado OK
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hola, bienvenidos a mi servidor con Nodejs')
})

server.listen(3000, () => {
  console.log('Servidor ejecutandose en http://localhost:3000')
})
