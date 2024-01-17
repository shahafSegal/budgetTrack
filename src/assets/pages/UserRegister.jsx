
import { useState } from "react"
import Login from "../components/login"
import "../styles/userReg.css"
import SignUp from "../components/signUp"
export default function UserRegister(props){
    const isLoggingIn=props.isLogin;
    const toggleLogin=props.togle;
    const userObj=props.usrObj;
    
    const toLogDiv=[isLoggingIn?<Login userLogin={props.usrLog}/>:<SignUp userLogin={props.usrLog}/>,<button onClick={toggleLogin}>{isLoggingIn?"don't have a user?":"already have a user?"}</button>]
    return(
        <div className="regForm">
            { 
                userObj.loggedIn?<h1>"{userObj.username}" logged in</h1>:toLogDiv

            }
            
        </div>
    )

}
