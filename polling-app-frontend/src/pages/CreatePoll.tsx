import { useState } from "react";
import { GoBack } from "../components/GoBack";
import { Badge } from "../components/Badge";
import { createPoll } from "../services/polls";

export function CreatePoll() {

  const [options, setOptions] = useState<Array<string>>([])
  const [option, setOption] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleAddOption = () => {
    setOptions([...options, option])
    setOption('')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (options.length === 0 && title === '') return

    const optionsFormatted = options.map((option) => ({ name: option }))
    const body = {
      title,
      description,
      options: optionsFormatted,
    }

    try {
      await createPoll(body)
      setOptions([])
      setTitle('')
      setDescription('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex flex-col min-h-screen px-4 py-12 w-full mx-auto max-w-4xl">
      <GoBack />
      <div className="flex flex-col items-center">
        <h1 className="px-4 py-3 mx-4 text-3xl text-rose-400 font-bold">Create a poll</h1>

        <div className="flex flex-col gap-4 w-full max-w-xl">
          <form className="flex flex-col gap-4 rounded-lg border-2 border-gray-200 p-4" onSubmit={handleSubmit}>
            <label className="mb-2">
              <p className="text-sm font-bold mb-4">Title</p>
              <input type="text" className="rounded-lg border-2 border-gray-200 p-2 w-full text-sm" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="mb-2">
              <p className="text-sm font-bold mb-4">Description</p>
              <textarea className="rounded-lg border-2 border-gray-200 p-2 w-full text-sm" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label className="mb-2">
              <p className="text-sm font-bold mb-4">Options</p>
              <div className="flex gap-2 mb-2">
                <input type="text" className="rounded-lg border-2 border-gray-200 p-2 w-full text-sm" value={option} onChange={(e) => setOption(e.target.value)} />
                <button type="button" className="bg-emerald-500 text-white rounded-lg px-4 py-2 w-[120px] text-xs" onClick={handleAddOption}>Add option</button>
              </div>
              {options.map((option) => (
                <Badge key={option} text={option} classes="bg-gray-50 text-gray-600 mr-2" />
              ))}
            </label>
            <input type="submit" name="Create" value="Create" className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 w-full hover:cursor-pointer" />
          </form>
        </div>
      </div>
    </main>
  )
}