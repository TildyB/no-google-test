import { useEffect, useState } from "react";
import axios from "axios"

import checkEmail from "../util/checkEmail";
import checkUsername from "../util/checkUsername";

const Login = () => {
  const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isUserNameValid,setIsUserNameValid] = useState(false);
    const [isEmailValid,setIsEmailValid] = useState(false);


    const userSignUp = async() => {
      const response =   await axios.post("http://localhost:3000/api/signup", {
            userName: userName,
            password: password,
            email: email
        })
    }

    useEffect(() => {
        checkUsername(userName,setIsUserNameValid);
        checkEmail(email,setIsEmailValid);
    }, [email,userName])

        
    
    return ( <>
        <h1>Login</h1>
        <input type="text" placeholder="username" onChange={(e)=> setUserName(e.target.value)}></input>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} /> 
        <button disabled={!isUserNameValid || !isEmailValid} onClick={userSignUp}>Login</button>
    </> );
}
 
export default Login;