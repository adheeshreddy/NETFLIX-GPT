import React from 'react'


const VideoTitle = ({title,overview}) => {
  return (
    <div className=' absolute pt-[20%] pl-13 -ml-0.5 text-white bg-gradient-to-r from-5% w-screen aspect-video'>
      <h3 className='pl-10 py-4 font-bold text-6xl'>{title}</h3>
        <p className='pl-10 py-4 w-3/7 font-bold text-lg'>{overview}</p>
        <div className='flex pl-10 py-2'>
                <button className='bg-white font-bold text-lg text-black  px-8 mr-5 rounded-sm hover:bg-gray-400 hover:cursor-pointer'> 
                 Play</button>
                <button className='bg-white font-bold text-lg text-black p-3 rounded-sm hover:bg-gray-400 hover:cursor-pointer'>More Info</button>
        </div>
        {/* <div className='w-full aspect-video bg-gradient-to-r from-black opacity-70'></div> */}
    </div>
  )
}

export default VideoTitle
