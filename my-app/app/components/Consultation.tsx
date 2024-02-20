import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";

const Consultation = () => {
  return (
    <div className="bg-secondary  w-[18rem] h-[11rem] rounded-[2.7rem] flex flex-col overflow-hidden m-4 py-8 px-8">
        <div className='flex justify-between w-full'>
            <h1 className='text-[#CCC] text-lg'>Consultation</h1>
            <HiOutlineDotsHorizontal className='text-black text-4xl' />
        </div>
        <div className='w-full flex'>
            <div className='w-1/2'>
                <h1 className='text-2xl font-semibold'>82/100</h1>
                <div className='bg-tertiary w-[90%] flex justify-between align-middle px-4 py-2 rounded-2xl mt-4'>
                    <h1 className='text-center m-auto'>82%</h1>
                    <FaArrowTrendUp className="text-white text-2xl mx-auto" />
                </div>
            </div>
            <div className='w-1/2'>
                <div className='w-20 h-20 border-[1.2rem] border-[#409BEE] rounded-full mx-auto' >
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation