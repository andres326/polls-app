import { usePolls } from '../hooks/usePolls'
import { ItemsList } from '../components/ItemsList'
import { useNavigate } from 'react-router-dom'

export const PollsList = () => {

  const navigate = useNavigate()
  const { polls } = usePolls()

  const handleCreatePoll = () => {
    navigate('/create')
  }

  return (
    <main className="flex flex-col min-h-screen px-4 py-12">
      <h1 className="px-4 py-3 mx-4 mb-4 text-3xl text-rose-400 font-bold">Polls</h1>

      <div className="flex flex-col gap-4 md:place-items-end max-w-4xl w-full md:mx-auto">
        <button className="mx-4 bg-blue-500 text-white rounded-lg px-4 py-2 w-[200px]" onClick={handleCreatePoll}>Create a poll</button>
        <ItemsList polls={polls} />
      </div>

    </main>
  )
}
