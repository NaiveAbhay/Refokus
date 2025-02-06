import React, { useState } from 'react'
import Product from './Product'
import { motion } from "motion/react"
import arqitel from "../assets/arqitel.mp4"
import ttr from "../assets/ttr.mp4"
import yir from "../assets/yir.mp4"
import yahoo from "../assets/yahoo.mp4"
import rainfall from "../assets/rainfall.mp4"


function Products() {
    // animate={{ y:23+`rem`, x:"-50%"}}
    
    let data=[
        {heading:"Arqitel",video:"",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",display:false},
        {heading:"TTR",video:"",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",display:false},
        {heading:"YIR 2022",video:"",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",display:false},
        {heading:"Yahoo!",video:"",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",display:false},
        {heading:"Rainfall",video:"",description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",display:false}
    ]

    const [val,setval]=useState(0);
    let animateVal= (index)=>{
        setval(23*index);
    }

  return (
    <div className='relative mt-[5%]'>
        {
            data.map((elem,idx)=>{
                return <Product data={elem} animate={animateVal} index={idx}/>
            })
        }
        <div  className='pointer-events-none absolute  top-0 w-full h-[23rem]'>
            <motion.div initial={{y:val+`rem` , x: "90%" }} animate={{ y: val+`rem`, x:"90%"}} transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}} className='overflow-hidden absolute h-[23rem] w-[30rem] '>

                    <motion.div  animate={{y: -val+`rem`}}  transition={{ease:[0.76, 0, 0.24, 1], duration:0.4}}  className='  h-full w-full'>
                        <video autoPlay loop muted playsInline src={arqitel} className=' rounded-3xl object-contain ' ></video>
                    </motion.div>
                    <motion.div animate={{y: -val+`rem`}}  transition={{ease:[0.76, 0, 0.24, 1], duration:0.4}} className='  h-full w-full'>
                    <video autoPlay loop muted playsInline src={ttr} className=' rounded-3xl object-contain' ></video>

                    </motion.div>
                    <motion.div animate={{y: -val+`rem`}}  transition={{ease:[0.76, 0, 0.24, 1], duration:0.4}} className='  h-full w-full'>
                    <video autoPlay loop muted playsInline src={yir} className=' rounded-3xl object-contain' ></video>
                    

                    </motion.div>
                    <motion.div animate={{y: -val+`rem`}} transition={{ease:[0.76, 0, 0.24, 1], duration:0.4}}  className='  h-full w-full'>
                    <video autoPlay loop muted playsInline src={yahoo} className=' rounded-3xl object-contain' ></video>

                    </motion.div>
                    <motion.div animate={{y: -val+`rem`}} transition={{ease:[0.76, 0, 0.24, 1], duration:0.4}}  className='  h-full w-full'>
                    <video autoPlay loop muted playsInline src={rainfall} className=' rounded-3xl object-contain' ></video>

                    </motion.div>


                    
            </motion.div>

        </div>
      
    </div>
  )
}

export default Products
