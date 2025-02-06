import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


// basis is property to set initial width of flex items basis-1/3 =33% basis-2/3 = 66%
function Cards() {
    
  return (
    <div  className='h-500 mb-10  max-w-screen-lg m-auto flex justify-center gap-0.5 mt-[10%]'>
        <motion.div whileHover={{padding:"25px"}} className='h-400 basis-1/3 p-5 bg-zinc-800 text-white  rounded-lg'>
            <div className='flex text-sm justify-between'> 
                <h2>Up Next: Culture</h2>
                <FaArrowRightLong />
            </div>
            <h1 className='text-xl mt-3 font-semibold'>
                Who we are<br/>
                together.
            </h1>
            
            <h1 id="main" className='h-[50%] pt-16 text-7xl' >
               
            </h1>
            <h2 id="base " className='mt-4 text-sm'>
                Explore what drives our team.
            </h2>
        
        </motion.div>
        <motion.div whileHover={{backgroundColor:"#7443ff",padding:"25px"}} className='h-400 basis-2/3 p-5 bg-zinc-800 text-white p-5 rounded-lg'>
            <div className='h-[10%] flex text-sm justify-between'> 
                <h2>Get in Touch</h2>
                <FaArrowRightLong />
            </div>
            <h1 className='text-xl mt-3 font-semibold'>
                Let's Get to it,<br/>
                together.
            </h1>
            <h1 id="main" className='h-[50%] pt-16 text-7xl' >
                Start a Project
            </h1>
            <h2 id="base " className='mt-4 w-fit px-4 py-2 text-sm border rounded-full'>
                Contact us
            </h2>
        
        </motion.div>
    </div>
  )
}

export default Cards
