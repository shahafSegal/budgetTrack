import { useState } from 'react'
import BudgetRegister from './assets/pages/BudgetRegister'
import {Route,BrowserRouter,Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import NavBar from './assets/components/NavBar'
import './assets/styles/darkM.css'
import UserRegister from './assets/pages/userRegister'

function App() {
  const [isLoggingIn,setIsLoggingIn]=useState(true)
  const toggleLogin=()=>{setIsLoggingIn(!isLoggingIn)}
  const[userObj,setUserObj]=useState({username:'',loggedIn:false})
  const userLogged=(name)=>{setUserObj({username:name,loggedIn:true})}
  const logOut=()=>{setUserObj({username:'',loggedIn:false})}


  return (
    <BrowserRouter>
      <NavBar usrObj={userObj} logOut={logOut}>

      </NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/budget' element={<BudgetRegister/>}/>
        <Route path='/register' element={<UserRegister usrLog={userLogged} usrObj={userObj} togle={toggleLogin} isLogin={isLoggingIn}/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
