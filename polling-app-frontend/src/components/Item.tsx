
import { Link } from 'react-router-dom'
import { SimplePoll } from '../types'

export const Item = ({ poll, putHorizontal = false }: { poll: SimplePoll, putHorizontal?: boolean }) => {
  return (
    <Link to={`/${poll.id}`} viewTransition>
      <div
        className={`flex ${putHorizontal ? '' : 'flex-col'
          } p-5 gap-2 border rounded border-gray-200 h-full`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-x-2">
            <span className="text-2xl font-semibold text-gray-900">
              {poll.title}&nbsp;
            </span>
            <span className="text-lg text-gray-600 mr-2">
              {poll.description}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}