import { useState } from 'react'
import { getPoll } from '../services/polls'
import { useEffect } from 'react'
import { DetailedPoll } from '../types'

export const usePoll = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false)
  const [poll, setPoll] = useState<DetailedPoll | null>(null)

  const getPollsList = async () => {
    try {
      setLoading(true)
      const poll = await getPoll(id)
      setPoll(poll)
    } catch {
      setPoll(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPollsList()
  }, [])

  return { poll, loading }
}

