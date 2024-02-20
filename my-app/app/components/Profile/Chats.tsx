import React from 'react'
import Message from './Message'
import ProfilePicture from '../ProfilePicture'

const Chats = () => {
  return (
    <div className='my-6'>
        <div className='ml-16'>
            <Message message='Hi, Doctor!' />
        </div>
        <div className='flex justify-start'>
            <ProfilePicture />
            <span className='mr-4'>{" "}</span>
            <Message message='I got a knee jerk. What should I do right now?' />
        </div>
        <h1 className='text-[#CCC] text-sm ml-16'>Tue 02:32pm</h1>
        
        
        <div className='flex flex-col justify-end'>
            <div className='flex justify-end'>
                <Message message='Hi Alexa.' />
                <span className='mr-4'>{" "}</span>
                <ProfilePicture />
            </div>
            <div className='ml-10'>
                <Message message='This help maintain balance and posture. Dont worry' />
            </div>
            <h1 className='text-[#CCC] text-sm text-right mr-16'>Tue 02:32pm</h1>
        </div>
       
    </div>
  )
}

export default Chats