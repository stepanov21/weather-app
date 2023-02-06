import React from 'react'
import {BiMenu} from 'react-icons/bi'

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center mt-4'>
      <h2 className='text-[34px]'>Weather App</h2>
      <BiMenu className='cursor-pointer text-[34px]'/>
    </header>
  )
}

export default Header