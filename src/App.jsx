import { useState } from 'react'
import './App.css'
import BudgetRegister from './assets/pages/BudgetRegister'
import {Route,BrowserRouter,Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import NavBar from './assets/components/NavBar'
import './assets/styles/darkM.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar>

      </NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/budget' element={<BudgetRegister/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
