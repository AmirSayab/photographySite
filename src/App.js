import './App.css'
import React, { useEffect } from 'react';
import './script.js'
import { NavLink } from "react-router-dom";
import ImageSlider from './components/ImageSlider';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageDetails from './components/ImageDetails';


function App() {
  return (
    <div>      
         <Hero />
        <ImageSlider />
        <ImageDetails />
        <Contact />
        <Footer />
        {/* <ImageSlider /> */}
      </div>
  );
}

export default App;
