import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import MainNav from './MainNav'

export default function AdminLogin() 
{   
    const navigate = useNavigate()
    const unameRef = useRef(null)
    const pwdRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const uname = unameRef.current.value
        const password = pwdRef.current.value

        const adminData = { uname, password }
        sessionStorage.setItem("adminData", JSON.stringify(adminData))

        if(uname === "admin" && password === "admin")
        {
            alert("Login valid")
            navigate("/admin")
        }
        else{
            alert("Invalid")
        }

        unameRef.current.value = ""
        pwdRef.current.value = ""
    }

  return (
    <div>
      <MainNav/>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <label>Enter Name:</label>
            <input ref={unameRef} required />
            <br/>

            <label>Enter Password:</label>
            <input ref={pwdRef} required type="password"/>
            <br/>

            <button >Submit</button>
          </form>
        </div>
    </div>
  )
}