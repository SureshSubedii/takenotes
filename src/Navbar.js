import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary my-0" >
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#" style={{borderRadius:'90px',backgroundColor:'#195454',padding:'5px'}}>TakeNotes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link text-white"  to="/about">About</Link>
        </li>
        
    
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar