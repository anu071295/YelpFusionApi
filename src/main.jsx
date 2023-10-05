import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Details from './details.jsx'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

 

  <Routes>
  <Route exact path="/" element={<App></App>}/>
  <Route exact path="/details" element={<Details/>}/>
  </Routes>
  
  </BrowserRouter>,
    
  
)
