import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './pages/App'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/info',
    element: <h1>Information sur l'appartement selectionné</h1>,
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
