import React from 'react'
import { IoMdCall } from "react-icons/io";
import { TbMicrophone } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import Chats from './Chats';
import ProfilePicture from '../ProfilePicture';

const Chat = () => {
  return (
    <div className='bg-tertiary rounded-[2rem] p-6 flex flex-col my-8'>
        <div className='flex justify-between w-full'>
            <div className='flex'>
            <ProfilePicture />
            <div className='my-auto ml-5'>
                <h1 className='font-semibold'>Alexa Max</h1>
                <h1 className='text-light text-xs text-[#CCC]'>Active 5 Min Ago</h1>
            </div>
            </div>
            <div className='my-auto flex align-middle justify-center'>
                <div className='bg-gray-700 h-12 w-12 rounded-full my-auto flex justify-center align-middle'>
                    <IoMdCall className='text-[#409BEE] text-2xl m-auto' />
                </div>
            </div>
        </div>
        <hr className='border-0 h-px my-4 bg-gray-600 ' />
        <div>
            <Chats />
        </div>
        <div className=''>
            <div className='bg-gray-700/70 w-full h-16 rounded-xl border-3 border-[#1B2C4F] px-4 flex'>
                <TbMicrophone className='text-[#ccc] text-3xl m-auto' />
                <input type="text" placeholder='Type your text.....' className='bg-transparent text-sm w-full h-12 my-auto rounded-xl border-3 border-[#1B2C4F] px-4 outline-none' />
                <div className='bg-[#409BEE] flex align-middle h-10 w-14 rounded-[0.5rem] my-auto'>
                    <IoIosSend className='text-white text-3xl m-auto' />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Chat