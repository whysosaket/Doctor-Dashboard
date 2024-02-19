import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";

const Consultation = () => {
  return (
    <div className="bg-secondary w-[26rem] h-[14rem] rounded-[2.7rem] flex flex-col overflow-hidden my-4 py-8 px-8">
        <div className='flex justify-between w-full'>
            <h1 className='text-[#CCC] text-xl'>Consultation</h1>
            <HiOutlineDotsHorizontal className='text-black text-4xl' />
        </div>
        <div className='w-full flex'>
            <div className='w-1/2'>
                <h1 className='text-3xl font-semibold'>82/100</h1>
                <div className='bg-tertiary w-[70%] flex justify-between align-middle px-4 py-2 rounded-2xl mt-10'>
                    <h1 className='text-center m-auto'>82%</h1>
                    <FaArrowTrendUp className="text-white text-3xl mx-auto" />
                </div>
            </div>
            <div className='w-1/2'>
                <div className='w-28 h-28 border-[1.2rem] border-[#409BEE] rounded-full mx-auto' >
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation