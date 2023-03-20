import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import Buttons from "./Buttons"

const Login = () => {
  
  const [ userName, setUserName ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ loggedinUser, setLoggedinUser ] = useState(false)

  const userLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
            userName,
            password
        })
      console.log(response);
      
      localStorage.setItem('token', response.data)
      setLoggedinUser(true)
      
    } catch (error) {
      console.log(error);
    }
  }
const handleLogout = () => {
  localStorage.clear()
  setLoggedinUser(false)
}

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedinUser(true)
    }
  }, [])
  
  return (
    <>
      <h1>Login</h1>
        <input type="text" placeholder="username" onChange={(e)=> setUserName(e.target.value)}></input>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={userLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <Buttons {...{loggedinUser}}></Buttons>
    </>
  )
}

export default Login