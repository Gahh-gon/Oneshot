import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, HashRouter} from 'react-router-dom'
import {Home} from './pages/Home'
import { PagePersonagens } from './pages/PagePersonagens'
import { PageBaixar } from './pages/PageBaixar'
import { PageGameplay } from './pages/PageGameplay'
import ErrorPage from './errorPage'
import './index.css'
import { App } from './pages/App'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>   
    <HashRouter>

      <Routes>
      <Route path='/'element={<App/>} children={
         <>
         <Route path='/' element={<Home/>} />
         <Route path='/characters' element={<PagePersonagens />} /><Route path='/downloadPage' element={<PageBaixar/>} /><Route path='/GameplayPage' element={<PageGameplay />} />
         </>
      } />
     
      <Route path="*" element={<ErrorPage />} />
      </Routes>
      

    </HashRouter>
    

  </React.StrictMode>
)
