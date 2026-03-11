import React from 'react'
import { useState,useEffect } from 'react'
import userdata from './users.json'
import AdminDashBoard from './AdminDashBoard'
export default function RegisteredUsers() 
{
const[user,setUser]=useState(userdata)
     
useEffect(() => {

    const storedUsers = localStorage.getItem("users")

    if (storedUsers) {
      setUser(JSON.parse(storedUsers))
    } 
    else {
      setUser(userdata)
      localStorage.setItem("users", JSON.stringify(userdata))
    }

  }, [])

  return (
    <div>
      
            <AdminDashBoard/>
<table border={1}>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Contact</th>
  </tr>
{

  user.map((value,index) => (

       <tr key={index}>
<td>{value.id}</td>
<td>{value.name}</td>
<td>{value.email}</td>
<td>{value.contact}</td>
       </tr>
 )) 
}
</table>
    </div>
  )
}
