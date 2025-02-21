import React from 'react'
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({title,overview}) => {
    return (<div className='pt-80 pl-11 max-sm:pt-20 w-screen h-96 absolute '>
        
        <h1 className='font-bold text-white text-4xl max-sm:text-sm'>{title}</h1>
        <p className='w-[400px] m-1 text-white text-sm max-sm:hidden '>{overview}</p>
        <div className='flex'>
            <button className='mr-2 bg-white h-9 p-1.5 rounded text-black max-sm:w-11 w-24 max-sm:h-8 max-sm:text-sm flex text-center justify-center font-bold '><FaPlay className='mt-1 mr-2'/>Play</button>
            <button className=' bg-gray-500 font-bold rounded w-36 p-2 max-sm:w-24 max-sm:h-8 max-sm:text-sm text-white'>More Info</button>
        </div>
        </div>)
}
export default VideoTitle