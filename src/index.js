import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './pages/App'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Appart from './pages/Appart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/info',
    element: <Appart />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/*',
    element: <h1>Erreur 404 NOT FOUND</h1>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
