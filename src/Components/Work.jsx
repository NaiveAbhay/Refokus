import React, { useState } from 'react'
import { motion } from "motion/react"

import { useScroll } from "motion/react"
import { useMotionValueEvent } from "framer-motion";


function Work() {

    const [Images,setImages] =useState([
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"40%",left:"48%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"46%",left:"42%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"34%",left:"50%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"43%",left:"48%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"48%",left:"52%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"46%",left:"43%",isActive:false},

    ]);
    


    
    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (latest) => {
        
        
        let ScrollVal=Math.floor(latest*100);

        
        if(ScrollVal>6){
            
            showNhideImages(5);
        }
        else if(ScrollVal>5){
            
            showNhideImages(4);
        }
        else if(ScrollVal>4){
            
            showNhideImages(3);
        }
        else if(ScrollVal>3){
           
            showNhideImages(2);
        }
        else if(ScrollVal>2){
            
            showNhideImages(1);
        }
        else if(ScrollVal>1){
            showNhideImages(0);
        }
        else{
            showNhideImages(-1);

        }
        
        
        
        
    })

    function showNhideImages(index){
            /// sir ne indexof ka use krke kiya tha jisme index ka array pass kr dete hain har case mai agar vo hota hai uss array mai to chalega varna nhi
        setImages((prev)=>{
            return prev.map((elem,idx)=>{
                if(idx<=index){
                    return {...elem,isActive:true}
                }
                else{
                    return {...elem,isActive:false}
                }
            })
        })

    }


  return (
    <div className='w-full '>
        <div className='max-w-screen-xl relative text-center mx-auto '>
             {/* leading-none se line height tight ho jati hai
             tracking tight se letter spacing kam ho jati hai
             select-none se user select nhi kar payega cheeze */}
            <h1 className='text-[28vw] text-white font-medium select-none leading-none tracking-tight'>
                work
            </h1>
            <div className='w-full h-screen absolute flex  top-0'>
            {
                Images.map((elem,idx)=>{
                    return   <img  className={`w-52 absolute rounded-lg -translate-x-[50%] -translate-y-[50%] `} style={{top:elem.top, left: elem.left, display: elem.isActive? "block" : "none" }} src={elem.url} alt="" />
                })
            }
            </div>
            
        </div>
      
    </div>
  )
}

export default Work
