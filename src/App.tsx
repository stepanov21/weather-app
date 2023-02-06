import React from "react"
import Header from "./components/Header";
import MainTemp from "./components/MainTemp";
import WeatherOnWeek from "./components/WeatherOnWeek";

function App() {
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
