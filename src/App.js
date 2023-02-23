
//////////////IMPORTS////////////////

import './App.scss';
import Chart from 'chart.js/auto'
import { useState } from "react";
import { Radar } from 'react-chartjs-2';


////////////////////////////////////////COMPONENTS//////////


import { RadarChart } from './components/Radar';
import Services from './components/Services';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  

  return (
    <div className="App">
      <div className="container">
        <Header />
        
        <div className="main">
          <About />
          <Portfolio />
          <Services />
          <Contact />
        </div>
        <div className="footer">Copyright 2023 Juniper C. James</div>
      </div>
    </div>
  );
}

export default App;
