import React from 'react'
import { MdWavingHand } from "react-icons/md";
import Search from './Search';
import { FiBell } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className='my-8 p-3 text-2xl flex'>
        <div>
        <h1 className='font-extralight'>Hello, </h1>
        <h1 className='flex font-semibold'>
            Dr. Colter!
        <MdWavingHand className='text-3xl ml-3 text-[#E6D78C]' />
        </h1>
        </div>
        <div className='my-auto'>
            <Search />
        </div>
        <div className='my-auto bg-bright p-3 rounded-2xl -ml-6'>
            <FiBell className='text-2xl my-auto ' />
        </div>
        
    </div>
  )
}

export default TopBar