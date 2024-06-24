import React from "react"
import logo from '../assets/images/logo.png'
function Navigation() {
  return (
    <>
      <nav className="flex justify-between p-2 m-2">
        {/* logo  */}
        <p className=""><img src={logo} alt="logo" /></p>
        {/* nav links */}
        <div className="capitalize flex gap-3 items-center text-xl -z-0 font-sans font-medium">
          <p>Resources</p>
          <p>Success stories</p>
          <p>companies</p>
          <p>prices</p>
          <div className="relative">
            <button className=" z-30 border-[2px] p-1 px-4 border-black rounded-md  bg-white">Login</button>
            <button className=" -z-10 absolute left-1 top-1 border-[2px] p-1 px-4 border-black rounded-md  bg-black">Login</button>
          </div>
          <div className="relative">
            <button className=" text-white z-30 border-[2px] p-1 px-4 border-black rounded-md  bg-orange">Create free account</button>
            
            <button className=" -z-10 absolute left-1  top-4 px-4 border-black rounded-md  bg-[#2E2F35] ">Create free account</button>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Navigation
