import { useEffect, useState } from 'react'
import BudgetRegister from './assets/pages/BudgetRegister'
import {Route,BrowserRouter,Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import NavBar from './assets/components/NavBar'
import './assets/styles/darkM.css'
import UserRegister from './assets/pages/UserRegister'
import { auth } from './config/firebaseconfig'
import { createUserWithEmailAndPassword ,onAuthStateChanged , signOut} from 'firebase/auth'


function App() {
  const [isLoggingIn,setIsLoggingIn]=useState(true)
  const toggleLogin=()=>{setIsLoggingIn(!isLoggingIn)}
  const[userObj,setUserObj]=useState({email:'',loggedIn:false,error:''})


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       setUserObj({email:user.email,loggedIn:true,error:''})
      } else {
        console.log("not signed")
      }
    });
  },[])

  const userSignUp= (email,pass)=>{
    
    createUserWithEmailAndPassword(auth,email,pass)
      .then(()=>{
        setUserObj({email:email,loggedIn:true,error:''})
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        setUserObj({...userObj,error:errorMessage})
      });

      

  }
  const logOut=()=>{
    signOut(auth).then(() => {
      setUserObj({email:'',loggedIn:false,error:''})
    }).catch((error) => {
      console.log(error)
    });
   
  }


  return (
    <BrowserRouter>
      <NavBar usrObj={userObj} logOut={logOut}>

      </NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/budget' element={<BudgetRegister/>}/>
        <Route path='/register' element={<UserRegister usrSign={userSignUp} usrObj={userObj} togle={toggleLogin} isLogin={isLoggingIn}/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
