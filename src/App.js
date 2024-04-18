import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import HotCoffee from './data/HotCoffee';
import IceCoffee from './data/IceCoffee';
import Contact from './component/ContactUs';



const App = () => {
  return (
  
      <Routes>
        <Route path="/coffeesite-web" element={<Home />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/HotCoffee" element={<HotCoffee />} />
        <Route path="/IceCoffee" element={<IceCoffee />} />
      </Routes>
      
  );
};

export default App;
