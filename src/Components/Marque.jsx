import React from 'react'
import { motion } from "motion/react"

let data1=[{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg"},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg"},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg"},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg"},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg"},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg"},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg"},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg"},{url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg"}]

let data2=[ "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275a4f001b08a4e28bc_weglot.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27565c41bb608f7f7c0_rainfall.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275ff2309d9d743ec75_doxel.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275af18668cfbd759bc_webflow.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",
  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg",]

function Marque() {
  return (
    <div className='mt-[15%] '>
      <div className='w-full flex overflow-hidden'>
        <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease: "linear", duration: 18, repeat:Infinity}}  className='flex flex-shrink-0  gap-3 px-5 relative overflow-hidden w-full h-12'>
          {
            data2.map((elem,idx)=>{
                return <div className='w-[10%] px-4 '>
                            <img  className={"object-center h-12"} src={elem} alt="" />
                        </div>
            })
          }                                                                                        
        </motion.div>
        <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease: "linear", duration:18 ,repeat:Infinity}}   className='flex flex-shrink-0  gap-3 px-5 relative overflow-hidden w-full h-12'>
          {
            data2.map((elem,idx)=>{
                return <div className='w-[10%] px-4 '>
                            <img  className={"object-center h-12"} src={elem} alt="" />
                        </div>
            })
          }                                                                                        
        </motion.div>
      </div>
      <div className='w-full  flex overflow-hidden'>
        <motion.div initial={{x:"-100%"}} animate={{x:"0"}} transition={{ease: "linear", duration:18 ,repeat:Infinity}} className='flex flex-shrink-0 gap-3 px-5 mt-7 relative overflow-hidden w-full h-12'>
          {
            data1.map((elem,idx)=>{
                return <div className='w-fit px-4 '>
                            <img className={"object-center h-12"} src={elem.url} alt="" />
                        </div>
            })
          }
        </motion.div>
        <motion.div initial={{x:"-100%"}} animate={{x:"0"}} transition={{ease: "linear", duration:18 ,repeat:Infinity}} className='flex flex-shrink-0 gap-3 px-5 mt-7 relative overflow-hidden w-full h-12'>
          {
            data1.map((elem,idx)=>{
                return <div className='w-fit px-4 '>
                            <img className={"object-center h-12"} src={elem.url} alt="" />
                        </div>
            })
          }
        </motion.div>
      </div>
      


    </div>
    
  )
}

export default Marque
