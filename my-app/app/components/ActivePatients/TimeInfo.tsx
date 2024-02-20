import React from 'react'
import ProfilePicture from '../ProfilePicture'
import Capsule from './Capsule'

const TimeInfo = () => {
  return (
    <div className='text-[#CCC] flex align-middle my-3'>
        <h1 className='mr-2 my-auto'>08:00 am</h1>
        <h1 className='text-[#666] my-auto mr-2'>-------</h1>
        <Capsule />
        <h1 className='text-[#666] my-auto ml-2'>-------</h1>
    </div>
  )
}

export default TimeInfo