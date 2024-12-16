import { Router } from 'express'
import { getAll, getById, create, vote } from '../controllers/poll'

export const pollsRouter = Router()

pollsRouter.get('/', getAll)
pollsRouter.get('/:id', getById)
pollsRouter.post('/', create)
pollsRouter.post('/:id/vote', vote)
