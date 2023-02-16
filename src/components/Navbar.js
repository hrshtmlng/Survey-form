import React from 'react'
import './Navbar.css';
// import './Home'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h1>
        <a  href='#'>Home</a>
        <a  href='#'>About</a>
        <a href='#'>Contact Us</a>
      </h1>
    </div>
  )
}
