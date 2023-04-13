import React, { useEffect } from "react";
import coldBg from './assets/cold.jpg';
import hotBg from './assets/hot.jpg';
import './index.css'
import Description from "./components/Description.jsx";
import { getFormattedWeatherData } from "./weatherService.js";

function App() {

  useEffect(()=>{
      const fetchWeatherData = async() =>{
        const data = await getFormattedWeatherData('pune')
      }

      fetchWeatherData();
  },[])
  
  return (
  <div className="app" style={{backgroundImage: `url(${coldBg}})`}}>
    <div className="overlay">
      <div className="container">
        <div className="section section__inputs">
          <input type="text" name="city" placeholder="Enter City..." />
          <button>°F</button>
        </div>

        <div className="section section__temperature">
          <div className="icon">
            <h3>Ghaziabad,UP</h3>
            <img src="" alt="weatherIcon" />
            <h3>Cloudy</h3>
          </div>
          <div className="temperature">
            <h1>34 °C</h1>
          </div>
        </div>

       <Description />
      </div>
    </div>
  </div>
  );
}

export default App;
