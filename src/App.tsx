import React from "react"
import Header from "./components/Header";
import MainTemp from "./components/MainTemp";
import WeatherOnWeek from "./components/WeatherOnWeek";

function App() {
  return (
    <div className="App">
      <div className="container m-auto flex flex-col h-[100vh]">
        <Header/> 
        <MainTemp/>
        <WeatherOnWeek/>
      </div>
    </div>
  );
}

export default App;
