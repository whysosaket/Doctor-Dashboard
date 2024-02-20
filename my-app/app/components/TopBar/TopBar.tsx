import React from 'react'
import { MdWavingHand } from "react-icons/md";
import Search from './Search';
import { FiBell } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className='mb-8 p-3 w-full text-2xl md:flex block'>
        <div>
        <h1 className='font-extralight'>Hello, </h1>
        <h1 className='flex font-semibold'>
            Dr. Colter!
        <MdWavingHand className='text-3xl ml-3 text-[#E6D78C]' />
        </h1>
        </div>
        <div className='flex w-full'>
        <div className='my-auto w-full md:w-auto'>
            <Search />
        </div>
        <div className='my-auto bg-bright p-3 rounded-2xl md:-ml-6 ml-3 w-12 md:w-auto'>
            <FiBell className='text-2xl my-auto ' />
        </div>
        </div>
    </div>
  )
}

export default TopBar