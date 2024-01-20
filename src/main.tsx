import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import { PagePersonagens } from './pages/PagePersonagens'
import { PageBaixar } from './pages/PageBaixar'
import { PageGameplay } from './pages/PageGameplay'
 import './styles/global.css'
import ErrorPage from './errorPage'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>   
    
      <BrowserRouter>
      <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/characters'element={<PagePersonagens/>}/>
      <Route path='/downloadPage'element={<PageBaixar/>}/>
      <Route path='/GameplayPage'element={<PageGameplay/>}/>
      <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>

  </React.StrictMode>
)
