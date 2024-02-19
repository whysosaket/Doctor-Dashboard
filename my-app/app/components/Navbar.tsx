import React from 'react'
import logo from "../assets/logo.png";
import { BiHome, BiMessageRoundedDetail } from "react-icons/bi";
import { IoDocumentTextOutline, IoSettingsOutline, IoExitOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='flex flex-col justify-between h-screen py-8'>
        <div>
            <img src={logo.src} alt="logo" className='w-8' />
        </div>
        <div className='text-[#CCC] text-2xl'>
            <BiHome className='my-6 hover:bg-tertiary hover:rounded-xl h-12 w-12 p-3' />
            <IoDocumentTextOutline className='my-6 hover:bg-tertiary hover:rounded-xl h-12 w-12 p-3' />
            <FiPieChart className='my-6 hover:bg-tertiary hover:rounded-xl h-12 w-12 p-3' />
            <BiMessageRoundedDetail className='my-6 hover:bg-tertiary hover:rounded-xl h-12 w-12 p-3' />
            <IoSettingsOutline className='my-6 hover:bg-tertiary hover:rounded-xl h-12 w-12 p-3' />
        </div>
        <div>
            <div className="bg-purple-200 w-12 h-12 rounded-full border-3 border-[#1B2C4F] mx-auto"></div>
            <IoExitOutline className='my-6 hover:bg-tertiary hover:rounded-xl h-12 w-12 p-3 text-2xl mx-auto' />
        </div>
    </div>
  )
}

export default Navbar