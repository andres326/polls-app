import { useState } from 'react'
import { getPolls } from '../services/polls'
import { useEffect } from 'react'
import { SimplePoll } from '../types'

export const usePolls = () => {
  const [loading, setLoading] = useState(false)
  const [polls, setPolls] = useState<Array<SimplePoll>>([])

  const getPollsList = async () => {
    try {
      setLoading(true)
      const polls = await getPolls()
      setPolls(polls)
    } catch {
      setPolls([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPollsList()
  }, [])

  return { polls, loading }
}

