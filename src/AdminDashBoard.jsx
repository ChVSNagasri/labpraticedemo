import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./nav.css"
export default function AdminDashBoard() 
{
  const navigate=useNavigate()
  return (
    <div >
      <nav>
     <button onClick={()=>{navigate("/api")}}>Api DATA</button>
       <button onClick={()=>{navigate("/registers")}}>Registered Users</button>
       <button onClick={()=>{navigate("/")}}>Home</button>
       </nav>
    </div>
  )
}
