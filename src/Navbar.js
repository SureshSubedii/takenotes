import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut, selectUser } from './features/userSlice'
import { auth } from './firebase'
import './Navbar.css'

function Navbar() {
  const dispatch=useDispatch()
  const handleClick=()=>{
    auth.signOut()
    dispatch(logOut())

  }
  const user=useSelector(selectUser);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary my-0" >
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/" style={{borderRadius:'90px',backgroundColor:'#195454',padding:'5px'}}>TakeNotes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link text-${user?'white':''} ${user?'':'disabled'}` } aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link text-${user?'white':''} ${user?'':'disabled'}`}  to="/about">About</Link>
        </li>
        
        
    
      </ul>
  <div onClick={handleClick} className={`btn btn-primary text-white  ${user?'':'d-none'} `}>LogOut</div>

      
    </div>

  </div>
</nav>
  )
}

export default Navbar