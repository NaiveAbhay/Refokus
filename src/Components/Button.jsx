import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({text}) {

  return (
    <div className='flex items-center justify-items-center '>
      <h2 className='px-3 py-1.5 text-black font-light gap-5 text-sm bg-white flex items-center rounded-full w-fit'>{text} <span className='text-black inline-block font-medium text-xl'>{ <IoIosReturnRight/> }</span></h2>
    </div>
  )
}

export default Button
