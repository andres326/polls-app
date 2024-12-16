import { Request, Response, NextFunction, response } from 'express'
//import { validateVehicle } from '../schemas/vehicle.js'
import { errors } from '../utils/constants'
import { PollModel } from '../models/postgres/poll'
import { validatePoll } from '../schemas/poll'

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { limit = 10 } = req.query
    const polls = await PollModel.get({ limit: Number(limit) });
    const pollsResponse = {
      response: polls,
      success: true,
    }
    return res.json(pollsResponse)
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const poll = await PollModel.getById({ id })
    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' })
    }
    const pollResponse = {
      response: poll,
      success: true,
    }
    return res.json(pollResponse)
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  const pollBody = validatePoll(req.body)

  if (!pollBody.success) {
    return next({ name: errors.VALIDATION_ERROR, errors: pollBody.error })
  }

  const poll = pollBody.data
  try {
    const newPoll = await PollModel.create({ poll })
    const pollResponse = {
      response: newPoll,
      success: true,
    }
    return res.json(pollResponse)
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
}

export const vote = async (req: Request, res: Response, next: NextFunction) => {
  const { id: pollId } = req.params
  const { optionId } = req.body
  try {
    await PollModel.vote({ pollId, optionId })
    return res.json({ response: 'Vote recorded', success: true })
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
}
