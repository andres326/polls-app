import express, { json, Express } from 'express'
import cors from 'cors'

import { Server } from 'socket.io'
import { createServer } from 'node:http'

import { pollsRouter } from './routes/poll'
import { errorHandler } from './middlewares/error'

const app: Express = express()
const server = createServer(app)
const io = new Server(server)

const port = process.env.PORT || 3000

app.use(json())
app.use(cors())

app.use('/polls', pollsRouter)

app.use(errorHandler)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
