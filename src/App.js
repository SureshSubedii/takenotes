import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Notes from './Notes';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './About';
import Front from './Front';
import LogIn from './LogIn';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  document.body.style.backgroundColor='rgb(220, 220, 207)';
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
      dispatch(logIn({
        email:userAuth.email
      })
      )}
      else{
        dispatch(logOut())
      }
    })
 
  }, [])
  
  return (
    <Router>
    
      {!user?(<LogIn/>   
        ): (
    <div className="app">
    <Navbar/>
      <Routes>
      <Route exact path="/about" element={<Front/>}/>
      <Route exact path="/" element={<Notes/>}/>





      </Routes>
      </div>)}

     
    
    
    </Router>
  );
}

export default App;
