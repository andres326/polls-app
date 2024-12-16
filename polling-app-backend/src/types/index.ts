export interface Poll {
  id: string
  title: string
  description: string
  options: Array<Partial<PollOption>>
}

export interface CreatePoll {
  title: string
  description: string
  options: Array<Partial<PollOption>>
}

export interface PollResponse {
  id: string
  title: string
  description: string
}

export interface FullPollResponse {
  id: string
  title: string
  description?: string
  options: Array<PollOption>
}

export interface PollOption {
  id: string
  name: string
  votes?: number
}