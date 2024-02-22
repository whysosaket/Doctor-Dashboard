"use client";
import React from 'react'
import { MdWavingHand } from "react-icons/md";
import Search from './Search';
import { FiBell } from "react-icons/fi";
import {motion} from 'framer-motion';

interface TopBarProps {
    doctorName: string;
}

const TopBar: React.FunctionComponent<TopBarProps> = ({doctorName}) => {
  return (
    <div className='mb-8 p-3 w-full text-2xl md:flex block'>
        <motion.div
        initial={{y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.7, delay:0.2}}
        >
        <h1 className='font-extralight'>Hello, </h1>
        <h1 className='flex font-semibold'>
           <span> {doctorName}</span>
        <MdWavingHand className='text-3xl ml-3 text-[#E6D78C]' />
        </h1>
        </motion.div>
        <motion.div
        initial={{y:-75, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.7, delay:0.4}}
        className='flex w-full'>
        <div
        className='my-auto w-full md:w-auto'>
            <Search />
        </div>
        <div
        className='my-auto bg-bright p-3 rounded-2xl md:-ml-6 ml-3 w-12 md:w-auto'>
            <FiBell className='text-2xl my-auto ' />
        </div>
        </motion.div>
    </div>
  )
}

export default TopBar