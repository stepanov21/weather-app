import React from 'react'
import { WiCloud } from 'react-icons/wi'

const WeatherOnWeek = () => {
  return (
    <div className='flex items-center flex-col min-w-fit rounded-md'>
      <div className='text-m text-gray-500'>28 Feb</div>
      <WiCloud className='mt-2 mb-2 text-[32px]'/>
      <div className='text-m'>18°C</div>
    </div>
  )
}

export default WeatherOnWeek