import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import { Personagens } from './pages/Personagens'
 import './styles/global.css'
import ErrorPage from './errorPage'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>   
    
      <BrowserRouter>
      <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/characters'element={<Personagens/>}/>
      <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>

  </React.StrictMode>
)
