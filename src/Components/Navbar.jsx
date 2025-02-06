import React from 'react'
import Button from './button'

function Navbar() {
  return (
    <div className='py-5 border-b-[1px] border-zinc-600 max-w-screen-lg m-auto flex justify-between items-center'>
        <div className='text-white flex'>
        <img className="text-white w-20px h-20px" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='ml-20 flex items-center justify-items-center gap-10'>
        {
            ["Home","Work","Culture","News"].map((elem,index)=>{
                return <a className='font-regular text-sm flex items-center gap-1'>{index===3 && <span className='inline-block mr-10 w-[2px] h-5 bg-zinc-600'></span>}{index===1 && (<span style={{boxShadow:  "0px 0px 0.55em #00FF19"}} className='inline-block w-1.5 h-1.5 rounded-full bg-green-500'></span>)}{elem}</a>
            })
        }
        </div>
      
        </div>
        <div>
            <Button text={"Start a Project"}/>
        </div>
    </div>
  )
}

export default Navbar
