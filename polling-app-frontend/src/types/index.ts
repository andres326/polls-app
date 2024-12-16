export interface DetailedPoll {
  id: string
  title: string
  description: string
  options: Array<Partial<PollOption>>
}

export interface SimplePoll {
  id: string
  title: string
  description: string
}

export interface PollOption {
  id: string
  name: string
  votes: number
}

export interface CreatePoll {
  title: string
  description: string
  options: Array<Partial<PollOption>>
}

interface SuccessResponse {
  success: boolean
}

export interface SuccessResponsePolls extends SuccessResponse {
  response: SimplePoll[]
}

export interface SuccessResponsePoll extends SuccessResponse {
  response: DetailedPoll
}

export interface ErrorResponse {
  error: string,
  message: string
}