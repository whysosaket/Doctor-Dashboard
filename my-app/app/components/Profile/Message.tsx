import React from 'react'

interface Props {
    message: string
}

const Message: React.FC<Props> = ({message}) => {
  return (
    <div className='bg-[#F1F1F1] my-2 text-black py-2 px-4 rounded-xl font-light text-sm max-w-52'>
        {message}
    </div>
  )
}

export default Message