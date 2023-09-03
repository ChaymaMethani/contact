import React from 'react';
import Navbar from "./navbar.js";
import ContactUs from './contactus.js';
import { Routes, Route } from 'react-router-dom';
import Home from "./acceuil.js";
import Communicate from "./communicate.js";

// Définition du composant App
function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/Communicate" element={<Communicate/>} />
       <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>

      
    </div>
  );
}

export default App;




