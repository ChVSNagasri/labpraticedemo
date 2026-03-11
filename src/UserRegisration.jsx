import React from 'react'
import { useState } from 'react'
import './user.css'
import MainNav from './MainNav'
export default function UserRegisration() 
{
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [contact,setContact]=useState("")
  const [gender,setGender]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    const userData = { name, email, contact, gender }
    localStorage.setItem("userData", JSON.stringify(userData))
    alert(`Form submittedd Successfully ${name}`)
    setName("")
    setEmail("")
    setContact("")
    setGender("")
  }
  return (
    <div>
      <MainNav/>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input value={name} required onChange={(e)=>(setName(e.target.value))}/>
        <pre></pre>
         <label>Enter Email:</label>
        <input value={email} required onChange={(e)=>(setEmail(e.target.value))}/><br/>
        <pre></pre>
         <label>Enter Contact:</label>
        <input value={contact} required onChange={(e)=>(setContact(e.target.value))}/><br/>
        <pre></pre>
        <label>Select Gender</label>
       <select value={gender} required onChange={(e)=>(setGender(e.target.value))}>
        <option>Gender</option>
         <option>Male</option>
          <option>Female</option>
           <option>Others</option>
       </select>
       <pre></pre>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}
