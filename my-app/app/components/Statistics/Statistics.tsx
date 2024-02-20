import React from 'react'
import Charts from './Charts'

const Statistics = () => {
  return (
    <div className="bg-secondary  md:w-[25rem] h-[23rem w-full rounded-[2.7rem] flex flex-col overflow-hidden md:m-4 py-8 px-8">
        <div className='flex justify-between'>
            <div className='text-white'>
            <h1 className='text-2xl font-semibold'>Statistics</h1>
            <h1 className='text-sm text-gray-400'>November 2023</h1>
            </div>
            <select className='bg-transparent text-white rounded-[2rem] py-1 px-2 border border-3 border-bright'>
                <option value="This Month">This Month</option>
                <option value="Last Month">Last Month</option>
                <option value="Last 3 Months">Last 3 Months</option>
            </select>
        </div>
        <Charts />
    </div>
  )
}

export default Statistics