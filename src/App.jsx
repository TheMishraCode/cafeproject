import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import BgImg from './assets/bgcafe.jpg'


const bg= {
  backgroundImage : `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
  height: "100%"
  // filter: "brightness(0.5)",
  // position: "absolute"
}

const App = () => {
  return (
    <>
    <div className="overflow-x-hidden bg-gradient-to-r from-black via-slate-900 to-slate-700  relative max-h-full">
      <div className='mix-blend-overlay absolute w-full h-full ' style={bg}>
      </div>
      <Navbar/>
      <Outlet/>

    </div>
    </>
  )
}

export default App