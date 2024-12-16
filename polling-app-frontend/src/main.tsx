import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { PollsList } from './pages/PollsList.tsx'
import { PollsVote } from './pages/PollsVote.tsx'
import { CreatePoll } from './pages/CreatePoll.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PollsList />,
  },
  {
    path: '/:id',
    element: <PollsVote />,
  },
  {
    path: '/create',
    element: <CreatePoll />,
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
