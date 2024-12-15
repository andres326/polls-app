import type { Request, Response, NextFunction } from 'express'

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
  console.log(JSON.stringify(error))
  return response.status(500).json({
    error: true,
    message: 'Internal server error',
  })
}
