import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Front.css'

function Front() { 
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/login")
    }
  return (
    <div className="front"><h1> Greetings Fellow LifeForm!!!</h1>
    <h2>This app lets you keep and store your notes online.</h2>
    <h3> Contact us for any other queries.</h3>
    <h4> SignUp and start taking notes!!!</h4>
    <button onClick={handleClick}> Click To Continue..</button>
    </div>
  )
}

export default Front