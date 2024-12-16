import { SimplePoll } from "../types"
import { Item } from "./Item"

export const ItemsList = ({ polls }: { polls: Array<SimplePoll> }) => {
  return polls?.length === 0 ? (
    <h1 className="mt-4 text-center text-4xl font-bold">No polls found</h1>
  ) : (
    <section className="max-w-4xl w-full gap-4 p-4 grid grid-cols-1 sm:grid-cols-2 ">
      {polls.map((poll) => (
        <Item key={poll.id} poll={poll} />
      ))}
    </section>
  )
}