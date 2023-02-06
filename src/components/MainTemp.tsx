import React from 'react'
import {WiDirectionDown, WiDirectionUp} from 'react-icons/wi'

const MainTemp: React.FC = () => {
  return (
    <>
      <div className='flex justify-between mt-auto border-b-4 border-gray-600 rounded-b-md pb-2'>
        <h2 className='text-[72px] font-bold'>28<span className='text-[30px] font-normal'>°C</span></h2>
        <div className='flex flex-col'>
          <span className='mb-auto'>↑35°C</span>
          <span>↓18°C</span>
        </div>
      </div>
      <h2 className='text-[30px] mt-2 mb-6'>Clear and sunny</h2>
    </>
  )
}

export default MainTemp