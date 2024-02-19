import React from 'react'
import ActivePatients from './ActivePatients'
import Chat from './Chat'

const Profile = () => {
  return (
    <div className='h-[99%] bg-[#111729] my-4 rounded-[2rem] p-6'>
        <div className='mt-12'>
            <div className='w-28 h-28 border-[0.3rem] border-[#409BEE] rounded-full mx-auto p-2' >
                <img src="https://randomuser.me/api/portraits" alt="profile" className='w-full h-full rounded-full bg-red-300' />
            </div>
            <h1 className='text-2xl font-semibold text-center mt-4'>Aliam Colter</h1>
            <h1 className='text-[#CCC] text-center'>Physician</h1>
        </div>
        <div>
            <ActivePatients />
        </div>
        <div>
            <Chat />
        </div>
    </div>
  )
}

export default Profile