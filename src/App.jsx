import React, { useEffect, useRef } from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripe from './Components/Stripe'
import Products from './Components/Products'
import Marque from './Components/marque'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  
  const scroll = new LocomotiveScroll();

 
  return (
    <div className='w-[100%]  bg-zinc-900 font-[satoshi]'>
      <Navbar/>
      <Work/>
      <Stripe/>
      <Products/>
      <Marque/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
