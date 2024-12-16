import { z } from 'zod'
import { CreatePoll } from '../types'

const pollSchema = z.object({
  title: z.string(),
  description: z.string(),
  options: z.array(
    z.object({
      name: z.string(),
    })
  ),
})

export const validatePoll = (poll: CreatePoll) => {
  return pollSchema.safeParse(poll)
}