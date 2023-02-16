
//////////////IMPORTS////////////////

import './App.css';
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



   





  const data = {
    labels: ['Red', 'Orange', 'Blue'],
    datasets: [
      {
        
        label: 'Popularity of colours',
        data: [55, 23, 96],
        borderColor:['blue'],
        backgroundColor: [
          'rgba(255, 0, 0, 0.6)',
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 0, 0.6)'
      ],
      borderWidth: 1,
    }
  ]
  }

  

  return (
    <div className="App">
      <div className="container">
        <Header />
        
        <div className="main">
          <About />
          <Services />
          <Portfolio />
          {/* <div className='chartcontainer'>
            <RadarChart  data={data}/>
          </div> */}
          <Contact />
        </div>
        <div className="footer">a</div>
      </div>
    </div>
  );
}

export default App;
