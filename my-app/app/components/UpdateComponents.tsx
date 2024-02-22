import React from 'react'
import {motion} from 'framer-motion';

interface UpdateComponentsProps {
    updateImage: any;
    updateName: any;
}


const UpdateComponents: React.FunctionComponent<UpdateComponentsProps> = ({updateName, updateImage}) => {
  return (
    <motion.div
    initial={{y:-50, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.7, delay:0.5}}
    className="bg-secondary md:w-[22rem] w-full h-[11rem] rounded-[2.7rem] md:m-4 md:mx-4 flex overflow-hidden p-8">
        <div className='w-1/2 h-full flex justify-center align-middle'>
            <button onClick={updateName} className='my-auto px-4 select-none bg-blue-500/50 rounded-lg py-2 hover:bg-blue-500/80'>
                <h1 className='text-md font-semibold'>Update Name</h1>
            </button>
        </div>
        <div className='w-1/2 h-full flex justify-center align-middle'>
            <button onClick={updateImage} className='my-auto px-4 select-none bg-purple-500/50 rounded-lg py-2 hover:bg-purple-500/80'>
                <h1 className='text-md font-semibold'>Update Logo</h1>
            </button>
        </div>
    </motion.div>
  )
}

export default UpdateComponents