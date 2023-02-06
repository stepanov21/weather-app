import React, { useEffect, useState } from "react"
import Header from "./components/Header";
import MainTemp from "./components/MainTemp";
import WeatherOnWeek from "./components/WeatherOnWeek";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    const getWeatherData = async() => {
      const { data } = await axios.get('http://api.weatherapi.com/v1/current.json?key=0620d2230b2c45d2a71193236222805&q=London&aqi=no')
      console.log(data)
    }
    getWeatherData()

  })
  return (
    <div className="App">
      <div className="container m-auto flex flex-col max-w-[420px] h-[100vh] p-6">
        <Header/> 
        <MainTemp/>
        <div className="flex gap-4 w-[100%] overflow-x-auto">
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
          <WeatherOnWeek/>
        </div>
      </div>
    </div>
  );
}

export default App;
