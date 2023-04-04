import React from 'react'

const WeatherOnWeek = ({name, condition, temp}) => {
  return (
    <div className='flex items-center justify-between w-[100%] px-6 py-4 bg-main rounded-2xl border-[3px] border-white border-opacity-10 backdrop-blur-[7px] shadow-md'>
      <div className='flex flex-col justify-between items-start'>
        <div className='text-[24px]'>{name}</div>
        <div className='text-[20px] mt-4'>{condition}</div>
      </div>
      <div className='py-2 px-3 bg-main rounded-xl border-[3px] border-white border-opacity-10 backdrop-blur-[7px]'>{temp}°C</div>
    </div>
  )
}

export default WeatherOnWeek