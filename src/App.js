import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Notes from './Notes';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './About';
import Front from './Front';
import LogIn from './LogIn';

function App() {
  document.body.style.backgroundColor='rgb(220, 220, 207)';
  return (
    <div className="app">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/" element={<Front/>}/>
      <Route exact path="/notes" element={<Notes/>}/>
      <Route exact path="/login" element={<LogIn/>}/>



      </Routes>
     
     </Router>
    </div>
  );
}

export default App;
