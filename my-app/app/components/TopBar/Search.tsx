import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='w-[24rem] text-md mx-8 my-auto'>
        <CiSearch className='text-[#CCC] absolute ml-3 mt-[0.7rem]' />
        <input type="text" className='bg-tertiary py-2 rounded-[1rem] w-full text-[16px] placeholder-[#CCC] outline-none pl-12' placeholder='Search' />
    </div>
  )
}

export default Search