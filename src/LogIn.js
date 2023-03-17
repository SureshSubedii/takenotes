import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logIn } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function LogIn() {
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const dispatch=useDispatch();
    const handleSignup=(e)=>{
      e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then(
          (userAuth)=>{
            userAuth.user.updateProfile({
              email:email
            }
          ).then(()=>{
              dispatch(logIn({
                email:email
    
              }))
            })
          }
        ).catch((error)=>alert(error))

    }
    const handleLogin=(e)=>{
      e.preventDefault();

      auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
        
        dispatch(logIn({
          email:userAuth.user.email

        }))
      }).catch((error)=>alert(error))
        
    }
  return (
    <div className="login">
        <h1>   Enter the details below  to continue</h1>
        <h3>SignUp if new, else Login and get started.</h3>
        <form>
            <input value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter email" name="email" type="email"/>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Create Password" type="password"/>
         <div className="login_buttons">
         <button onClick={handleLogin}>LogIn</button>  
         <button onClick={handleSignup}>SignUp</button>


         </div>
            


        </form>
    </div>
  )
}

export default LogIn