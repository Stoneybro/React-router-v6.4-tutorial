import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Root,{loader as rootLoader} from './routes/root'
import ErrorPage from './errorpage'
import Contact from './routes/contact'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import './App.css'

const router=createBrowserRouter([{
  path: '/',
  element:<Root />,
  errorElement:<ErrorPage />,
  loader:rootLoader,
  children:[{
    path: 'contacts/:contactId',
  element:<Contact />
  },]
},

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
