import express, { json, Express } from 'express'
import cors from 'cors'

import { Server } from 'socket.io'
import { createServer } from 'node:http'

import { pollsRouter } from './routes/poll'
import { errorHandler } from './middlewares/error'

const app: Express = express()
const port = process.env.PORT || 3000

app.use(json())
app.use(cors())

app.use('/polls', pollsRouter)

app.use(errorHandler)


const server = createServer(app)
export const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})


server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
