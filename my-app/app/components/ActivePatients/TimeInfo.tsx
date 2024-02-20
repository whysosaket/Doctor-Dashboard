import React from 'react'
import ProfilePicture from '../ProfilePicture'
import Capsule from './Capsule'

interface Props {
    name: string;
    time: string;
    ct: string;
}

const TimeInfo: React.FC<Props> = ({name, time, ct}) => {
  return (
    <div className='text-[#CCC] md:flex align-middle my-3'>
        <h1 className='mr-2 md:my-auto my-2'>{ct}</h1>
        <h1 className='text-[#666] my-auto mr-2 md:block hidden'>-------</h1>
        <Capsule name={name} time={time}  />
        <h1 className='text-[#666] my-auto ml-2 md:block hidden'>-------</h1>
    </div>
  )
}

export default TimeInfo