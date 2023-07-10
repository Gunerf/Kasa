import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './pages/App'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Appart from './pages/Appart'
import Error404 from './pages/Error404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/apparts/:appartId',
    element: <Appart />,
    errorElement: <Error404 />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/*',
    element: <Error404 />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
