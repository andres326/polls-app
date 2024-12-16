import { usePolls } from '../hooks/usePolls'
import { ItemsList } from '../components/ItemsList'

export const PollsList = () => {

  const { polls } = usePolls()


  return (
    <main className="flex flex-col min-h-screen px-4 py-12">
      <h1 className="px-4 py-3 mx-4 text-3xl text-rose-400 font-bold">Polls</h1>

      <div className="flex flex-col gap-4">
        <ItemsList polls={polls} />
      </div>

    </main>
  )
}
