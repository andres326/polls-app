import express, { json, Express } from 'express'
import cors from 'cors'
import { pollsRouter } from './routes/poll'
import { errorHandler } from './middlewares/error'

//export const createApp = ({ pollModel }) => {
const app: Express = express()
const port = process.env.PORT || 3000

app.use(json())
app.use(cors())

app.use('/polls', pollsRouter)

app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
//}
