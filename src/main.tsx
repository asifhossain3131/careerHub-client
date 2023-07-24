import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home page/Home.tsx'
import Main from './layouts/Main.tsx'
import Application from './pages/application/Application.tsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/application',
        element:<Application></Application>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
