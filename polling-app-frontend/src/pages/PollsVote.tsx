import { Link, useParams } from "react-router-dom";
import { BackIcon } from "../components/icons";
import { usePoll } from "../hooks/usePoll";
import { useState } from "react";
import { vote } from "../services/polls";

export function PollsVote() {
  const { id = '' } = useParams()
  const { poll } = usePoll({ id })
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!selectedOption) return

    await vote(id, selectedOption)
    setSelectedOption(null)
  }

  return (
    <main className="flex flex-col min-h-screen px-4 py-12 w-full mx-auto max-w-4xl">
      <Link
        to="/"
        className="flex text-sm items-center underline mb-4 hover:text-blue-600"
        viewTransition
      >
        <BackIcon height={16} width={16} />
        Back to list
      </Link>
      <article className="flex flex-col sm:gap-8 md:flex-row mb-8">
        <div className="flex flex-col py-4 px-8">
          <label className="mb-4">
            <p className="text-4xl font-bold mb-4">{poll?.title}</p>
            <p className="text-xl">{poll?.description}</p>
          </label>
          <form className="flex flex-col gap-4 rounded-lg border-2 border-gray-200 p-4" onSubmit={handleSubmit}>
            {poll?.options.map((option) => (
              <div key={option.id} className="flex gap-2">
                <input
                  type="radio"
                  name="option"
                  id={option.id}
                  value={option.id}
                  className=" rounded-lg border-2 border-gray-200 p-2"
                  checked={selectedOption === option.id}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor={option.id} className="text-md text-gray-600">
                  {option.name}
                </label>
              </div>
            ))}
            <input type="submit" value="Vote" className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full" />
          </form>
        </div>
      </article>
      {/* <section>
        <h3 className="text-xl font-semibold mb-4">Check other vehicles</h3>
        <div className="flex flex-col gap-4 md:flex-row w-full">
          {otherVehicles.map((vehicle) => (
            <Item key={vehicle.id} vehicle={vehicle} putHorizontal />
          ))}
        </div>
      </section> */}
    </main>
  )
}