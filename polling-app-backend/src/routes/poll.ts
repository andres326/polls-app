import { Router } from 'express'
import { getAll } from '../controllers/poll'

export const pollsRouter = Router()

pollsRouter.get('/', getAll)
/* pollsRouter.get('/:id', getById)
pollsRouter.post('/', create)
pollsRouter.put('/:id', update)
pollsRouter.delete('/:id', deleteItem) */
