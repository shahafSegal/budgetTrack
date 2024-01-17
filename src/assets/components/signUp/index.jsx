import { useState } from "react"

export default function SignUp(props){
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
            <label htmlFor="repeatPass">
                repeat password:
                <input type="password" name="repeatPass" />
            </label>
            <button onClick={()=>{console.log(userNameVal); props.userLogin(userNameVal)}}>login</button>

        </div>
    )
}