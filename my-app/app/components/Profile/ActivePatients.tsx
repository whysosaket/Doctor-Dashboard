import React from 'react'

const ActivePatients = () => {
  return (
    <div className='bg-tertiary rounded-[2rem] p-6 flex my-8'>
        <span className='my-auto'>ActivePatients</span>
        <div className="flex ml-16">
            <div className="bg-purple-200 w-10 h-10 rounded-full border-3 border-[#1B2C4F]"></div>
            <div className="bg-teal-200 w-10 h-10 rounded-full border border-3 border-[#1B2C4F] relative right-4"></div>
            <div className="bg-green-200 w-10 h-10 rounded-full border border-3 border-[#1B2C4F] relative right-8"></div>
            <div className="bg-gray-100 w-10 h-10 rounded-full border border-3 border-[#1B2C4F] relative right-12 text-black font-semibold flex justify-center align-middle"> 
                <h1 className="my-auto">4+</h1>
            </div>
        </div>
    </div>
  )
}

export default ActivePatients