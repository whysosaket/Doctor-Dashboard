import React from 'react'
import TimeInfo from './TimeInfo'
import { motion } from 'framer-motion'

const PatientsTiming = () => {
  return (
    <motion.div
    initial={{y:80, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.7, delay:0.7}}
    className="bg-secondary md:w-[30rem] md:h-[25rem] rounded-[2.7rem] m-4 p-8 overflow-hidden">
        <TimeInfo />
        <TimeInfo />
        <TimeInfo />
        <div className='text-[#CCC] md:flex align-middle my-3'>
        <h1 className='mr-2 my-2 md:my-auto'>08:00 am</h1>
        <div className='flex'>
        <h1 className='text-[#666] my-auto mr-2'>-------</h1>
        <div className='bg-black/90 text-white px-4 py-1 mx-2 rounded-2xl'>
          Break Time
        </div>
        <h1 className='text-[#666] my-auto ml-2'>--------</h1>
        </div>
    </div>
        <TimeInfo />
    </motion.div>
  )
}

export default PatientsTiming