import { Request, Response, NextFunction } from 'express'
//import { validateVehicle } from '../schemas/vehicle.js'
import { errors } from '../utils/constants'
import { PollModel } from '../models/postgres/poll'

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { limit } = req.query
    const polls = await PollModel.get({ limit: Number(limit) })
    return res.json(polls)
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
}

/* export const getById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const vehicle = await PollModel.getById({ id })
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' })
    }
    return res.json(vehicle)
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  const vehicleBody = validateVehicle(req.body)

  if (!vehicleBody.success) {
    return next({ name: errors.VALIDATION_ERROR, errors: vehicleBody.error })
  }

  const vehicle = vehicleBody.data
  try {
    const newVehicle = await PollModel.create({ vehicle })
    return res.json(newVehicle)
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  const vehicleBody = validateVehicle(req.body)

  if (!vehicleBody.success) {
    return next({ name: errors.VALIDATION_ERROR, errors: vehicleBody.error })
  }

  const vehicle = vehicleBody.data
  const { id } = req.params

  try {
    const updatedVehicle = await PollModel.update({ id, vehicle })
    if (!updatedVehicle) {
      return res.status(404).json({ message: 'Vehicle not found' })
    }

    return res.json(updatedVehicle)
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
}

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const vehicle = await PollModel.delete({ id })
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' })
    }
    return res.json({ message: 'Vehicle deleted' })
  } catch (error) {
    next({ name: errors.DB_ERROR, error })
  }
} */

