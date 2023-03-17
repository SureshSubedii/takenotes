import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Notes from './Notes';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './About';

function App() {
  // document.body.style.backgroundColor='red';
  return (
    <div className="app">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/" element={<Notes/>}/>

      </Routes>
     
     </Router>
    </div>
  );
}

export default App;
