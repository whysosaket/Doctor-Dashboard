import React from 'react'
import TimeInfo from './TimeInfo'

const PatientsTiming = () => {
  return (
    <div className="bg-secondary w-[30rem] h-[25rem] rounded-[2.7rem] m-4 p-8 overflow-hidden">
        <TimeInfo />
        <TimeInfo />
        <TimeInfo />
        <div className='text-[#CCC] flex align-middle my-3'>
        <h1 className='mr-2 my-auto'>08:00 am</h1>
        <h1 className='text-[#666] my-auto mr-2'>-----------</h1>
        <div className='bg-black/90 text-white px-4 py-1 mx-2 rounded-2xl'>
          Break Time
        </div>
        <h1 className='text-[#666] my-auto ml-2'>-----------</h1>
    </div>
        <TimeInfo />
    </div>
  )
}

export default PatientsTiming