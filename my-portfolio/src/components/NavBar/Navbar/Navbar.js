import React from 'react'
import './navbar.css'
import logo from '../../../assets/logo.jpg'
import { Link } from 'react-scroll'





function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo'/>
      <div className='desktopMenu'>
         <Link className='desktopMenuListItem'>Home</Link>
         <Link className='desktopMenuListItem'>About</Link>
         <Link className='desktopMenuListItem'>Portfolio</Link>
         <Link className='desktopMenuListItem'>Clients</Link>
      </div>
      <button className='desktopMenuBtn'>
        <h3 className='desktopMenuImg'>Contact</h3>
        
      </button>
    </nav>
  )
}

export default Navbar