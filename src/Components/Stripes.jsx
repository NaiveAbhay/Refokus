import React from 'react'

function Stripes({url,number}) {




  return (
    <div className='flex w-[20%] pl-10 pr-10 justify-between py-4 border-[1px] border-zinc-600'>
      <div className='w-[70%] flex item-center'>
      <img  src={url} alt="" />
      </div>
      <h1 className='text-white '>{number}</h1>
    </div>
  )
}

export default Stripes

