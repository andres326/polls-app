import { CreatePoll, DetailedPoll, ErrorResponse, SuccessResponsePoll, SuccessResponsePolls } from "../types"

const { VITE_API_URI: API_URI } = import.meta.env

export async function getPolls() {
  const response = await fetch(`${API_URI}/polls`)
  const data: SuccessResponsePolls | ErrorResponse = await response.json()

  if ('error' in data && data.error) { throw new Error(data.error) }

  if ('success' in data && data.success) {
    return data.response
  }

  return []
}

export async function getPoll(id: string) {
  const response = await fetch(`${API_URI}/polls/${id}`)
  const data: SuccessResponsePoll | ErrorResponse = await response.json()

  if ('error' in data && data.error) { throw new Error(data.error) }

  if ('success' in data && data.success) {
    return data.response
  }

  return null
}

export async function createPoll(poll: CreatePoll) {
  const response = await fetch(`${API_URI}/polls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(poll),
  })
  const data: SuccessResponsePoll | ErrorResponse = await response.json()
  if ('error' in data && data.error) throw new Error(data.error)

  if ('success' in data && data.success) {
    return data.response
  }

  return null
}

export async function vote(pollId: string, optionId: string) {
  const response = await fetch(`${API_URI}/polls/${pollId}/vote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ optionId }),
  })
  const data: { response: string, success: boolean } | ErrorResponse = await response.json()
  if ('error' in data && data.error) throw new Error(data.error)

  if ('success' in data && data.success) {
    return data.response
  }

  return null
}