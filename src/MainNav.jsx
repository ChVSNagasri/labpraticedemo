import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function MainNav() {
  return (
    <nav className="nav">
      <button><Link to="/">Home</Link></button>
      <button><Link to="/user">User Registration</Link></button>
     <button> <Link to="/admlog">Admin Login</Link></button>
    </nav>
  )
}