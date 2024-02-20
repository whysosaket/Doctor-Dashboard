import React from 'react'
import ProfilePicture from '../ProfilePicture'
import Capsule from './Capsule'

const TimeInfo = () => {
  return (
    <div className='text-[#CCC] md:flex align-middle my-3'>
        <h1 className='mr-2 md:my-auto my-2'>08:00 am</h1>
        <h1 className='text-[#666] my-auto mr-2 md:block hidden'>-------</h1>
        <Capsule />
        <h1 className='text-[#666] my-auto ml-2 md:block hidden'>-------</h1>
    </div>
  )
}

export default TimeInfo