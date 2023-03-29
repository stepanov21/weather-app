import React, { useContext } from "react";
import { WeatherContext } from "../App";

const MainTemp: React.FC = () => {
  const { weatherData }: any = useContext(WeatherContext);
  console.log(weatherData)
  return (
    <>
      <div className="flex justify-between mt-auto rounded-b-md pb-2">
        <h2 className="text-[48px] font-bold">
          {weatherData.current.temp_c}
          <span className="text-[24px] font-normal">°C</span>
        </h2>
        <div className="flex flex-col justify-between items-end">
          <div className="flex items-center ">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.12086 4.90873C1.63139 2.62288 3.65851 0.998278 5.99801 1C6.36394 0.999542 6.72873 1.04078 7.08535 1.12291C8.38452 1.40889 9.51566 2.20285 10.2271 3.32817C10.9385 4.45348 11.1712 5.81679 10.8735 7.11479C10.8475 7.25877 10.7434 7.37617 10.6037 7.41901C10.464 7.46184 10.3121 7.42294 10.2101 7.31819C10.1081 7.21344 10.0731 7.06041 10.1194 6.92165C10.5872 4.82946 9.40812 2.71982 7.38236 2.02471C5.35661 1.32959 3.13287 2.27158 2.22056 4.21127C1.30825 6.15096 1.9995 8.46726 3.82511 9.58792C5.65071 10.7086 8.02611 10.2748 9.33893 8.58094C9.47997 8.45022 9.69507 8.44178 9.84589 8.56104C9.99671 8.68031 10.0383 8.89177 9.94398 9.05941C8.51234 10.9119 5.98805 11.5211 3.87064 10.525C1.75322 9.5289 0.610317 7.19458 1.12086 4.90873ZM6.06612 7.20882C5.98005 7.0274 6.0454 6.81019 6.21724 6.70655L6.51099 6.56169L7.00204 4.9902L5.4675 5.47306L4.766 7.71617C4.7029 7.9197 4.4871 8.03363 4.28371 7.97077C4.18507 7.94049 4.10265 7.87191 4.05486 7.78035C4.00708 7.68879 3.99792 7.58189 4.02942 7.48352L4.7923 5.04287C4.83183 4.92331 4.92651 4.83015 5.0466 4.79266L7.48433 4.02886C7.55803 4.00239 7.63862 4.00239 7.71232 4.02886C7.81064 4.05817 7.89303 4.1259 7.94087 4.21676C7.98872 4.30761 7.998 4.41394 7.96661 4.51172L7.18619 6.95676C7.15511 7.05814 7.08377 7.14226 6.98889 7.18941L6.55045 7.4089C6.36164 7.47676 6.1522 7.39024 6.06612 7.20882Z"
                fill="white"
              />
            </svg>
            <span className="mb-auto ml-1">{weatherData.current.wind_dir}</span>
          </div>
          <span>{weatherData.current.wind_kph} km/h</span>
        </div>
      </div>
      <div className="h-[3px] w-full bg-white bg-opacity-20 rounded-full my-2"></div>
      <div className="flex items-center justify-between">
        <h2 className="text-[24px]">
          {weatherData.location.name}
        </h2>
        <span>{weatherData.current.condition.text}</span>
      </div>
    </>
  );
};

export default MainTemp;
