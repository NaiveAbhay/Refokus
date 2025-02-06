import React from 'react'

function Footer() {
  return (
    <div className='mt-40 pb-5 flex max-w-screen-lg gap-32 justify-between mx-auto '>
      <div className=''>
        <h1 className='text-9xl text-white font-semibold'>refokus.</h1>
        <div className='flex mt-8  text-gray-600 text-sm  gap-5 text-grey-800'>
            <h2>Privacy Policy</h2>
            <h2>Cookie Policy</h2>
            <h2>Impressum</h2>
            <h2>Terms</h2>
        </div>
        
      </div>
      <div className='flex  '>
        <div className='text-sm text-gray-600  mr-10'>
            <h2 className='mb-5 text-white'>Socials</h2>
            <h2 className=''>Twitter</h2>
            <h2>Instagram</h2>
            <h2>Linkedin</h2>
        </div>
        <div className='text-sm  text-gray-600 mr-16'>
            <h2  className='mb-5  text-white'>Sitemao</h2>
            <h2>Home</h2>
            <h2>Work</h2>
            <h2>Careers</h2>
            <h2>Contacts</h2>
        </div>
        <div className='w-[50%] my-auto text-sm font-semibold text-white text-right'>
            <h2>Refokus is a pioneering digital agency driven by design and empowered by technology.</h2>
            <img className='w-28 ml-20 mt-5 ' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
