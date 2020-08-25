import express from 'express'

const port = parseInt(`${process.env.PORT}`, 10) || 3000

const server = express()

server.all('/hello', (_req, res) => {
  return res.status(200).json({
    name: 'John Doe'
  })
})

server.all('*', (_req, res) => {
  return res.status(404).end('404')
})

server.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})