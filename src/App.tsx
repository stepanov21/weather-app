import React, { createContext, useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import MainTemp from "./components/MainTemp";
import WeatherOnWeek from "./components/WeatherOnWeek";
import Search from "./components/Search";

import axios from "axios";
import { motion as m, AnimatePresence } from "framer-motion";

import { IMyContext, TRecent } from "./@types/types";

export const WeatherContext = createContext<IMyContext | null>(null);
const local: [] = JSON.parse(window.localStorage.getItem("recentItem") || '') || [];

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [error, setError] = useState(false);
  const [recent, setRecent] = useState<TRecent[]>(local || []);
  const refInput = useRef<HTMLInputElement>(null);

  const setRecentWeather = (data) => {
    if (recent.some((item) => item.name === data.location.name)) {
      return;
    }
    if (window.localStorage) {
    }
    const obj: TRecent = {
      name: data.location.name,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
    };
    setRecent((v) => [...v, obj]);
  };

  const focusClearInput = () => {
    setValue("");
    setSearch("");
    refInput.current?.focus();
  };

  const clearAllRecent = () => {
    setRecent([]);
    window.localStorage.clear();
    focusClearInput();
    setError(false)
  };

  useEffect(() => {
    const json = JSON.stringify(recent);
    window.localStorage.setItem("recentItem", json);
  }, [recent]);

  useEffect(() => {
    const getWeatherData = async () => {
      setError(false)
      try {
        const { data } = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=0620d2230b2c45d2a71193236222805&q=${
            search || "London"
          }&aqi=no`
        );
        console.log(data);
        setWeatherData(data);
        setRecentWeather(data);
      } catch (error) {
        setError(true)
      }
    };
    getWeatherData();
  }, [search]);

  if (!weatherData) {
    return;
  }

  console.log(recent);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        search,
        setSearch,
        value,
        setValue,
        focusClearInput,
        setShowInput
      }}
    >
      <div className="App">
        <div className="container m-auto max-w-[327px] py-8">
          <div className="flex flex-col p-6 h-[300px] bg-main rounded-2xl border-[3px] border-white border-opacity-10 backdrop-blur-[7px] shadow-md">
            <Header/>
            <AnimatePresence>
              {showInput && (
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                >
                  <Search refInput={refInput} />
                  {error && <div>Не могу найти такой город</div>}
                </m.div>
              )}
            </AnimatePresence>
            <MainTemp />
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl my-4 font-bold">Recent</h2>
            <span
              onClick={() => clearAllRecent()}
              className="underline cursor-pointer"
            >
              Clear all
            </span>
          </div>
          <div className="flex flex-col gap-4 w-[100%]">
            {recent && recent?.map((item: TRecent, id) => (
              <WeatherOnWeek key={id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
