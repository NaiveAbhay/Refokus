import React from 'react'
import Button from './button'

function Product({data,animate,index}) {
  return (
    <div onMouseEnter={()=>{animate(index)}} className='w-full h-[23rem]'>
        <div className='flex max-w-screen-2xl px-[10%] text-white py-[4%] justify-between items-center h-full mx-auto'>
            <h1 className='text-5xl'>{data.heading}</h1>
            <div className='w-[25%]'>
                <div className='mb-8'>
                {data.description}
                </div>
                <div className='flex justify-between'>
                  <Button text={"Live Project"}/>
                  <span className={`${(index==4 || index==3) ? "inline" : "hidden"}`}><Button text={"Case Study"}/></span>
              
                </div>
            </div>
            

        </div>
      
    </div>
  )
}

export default Product
