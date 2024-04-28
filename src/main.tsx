import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter,RouterProvider } from 'react-router-dom'
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import {Home} from './pages/Home'
import { PagePersonagens } from './pages/PagePersonagens'
import { PageBaixar } from './pages/PageBaixar'
import { PageGameplay } from './pages/PageGameplay'
// import ErrorPage from './errorPage'
import './index.css'
import { App } from './pages/App'
import { Home } from './pages/Home'

const router= createHashRouter([
{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/characters",
      element:<PagePersonagens/>
    },
    {
      path:'/downloadPage',
      element:<PageBaixar/>
    },
      {
        path:'/GameplayPage',
        element:<PageGameplay/>
      }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>   
  <RouterProvider router={router}/>
  </React.StrictMode>
)