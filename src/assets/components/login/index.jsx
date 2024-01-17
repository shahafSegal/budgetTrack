import { useState } from "react"

export default function Login(props){
    const [userNameVal,setUserNameVal]=useState("")
    const changeUserName=(e)=>{setUserNameVal(e.target.value)}
    return(
        <div className="logBox">
            <label htmlFor="userName">
                Username: 
                <input type="text" name="userName" value={userNameVal} onInput={changeUserName} />
            </label>
            <label htmlFor="password">
                password: 
                <input type="password" name="password" />
            </label>
            <button onClick={()=>props.userLogin(userNameVal)}>login</button>

        </div>
    )
}