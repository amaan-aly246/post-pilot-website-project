import React from "react"
import header_img1 from "../assets/images/header_img-1.png"
import header_img2 from "../assets/images/header_img-2.png"
import { btnVariant } from "../animation/animation"
import { motion } from "framer-motion"
function Header() {
  return (
    <>
      <header className="bg-primaryColor-1.2 flex-row lg:flex  pt-10">
        {/* text area */}
        <section className="basis-3/5   p-10  relative z-20">
          <div className=" text-3xl lg:text-6xl font-semibold ">
            <p className="lg:p-4">Meet your</p>
            <p className="lg:p-6">
              <span className=" text-primaryColor-1 font-myFont-Playwrite">
                favorite
              </span>{" "}
              new (old)
            </p>
            <p  className="h-full py-5">marketing channel.</p>
          </div>

          <div className="my-6 text-xl lg:text-2xl">
            <p>Remarkable results. Easier than email. Postcard marketing </p>
            <p>reinvented for modern ecommerce.</p>
          </div>
          <div className="relative py-1 my-4 flex gap-6">
            <motion.button className=" text-white z-30 border-[2px] p-2 px-4 border-black rounded-md  bg-orange uppercase"
            variants={btnVariant}
            initial={null}
            whileHover='hover'
            whileTap='tap'>
              try it risk-free
            </motion.button>
            {/* below button is used for the effect */}
            <button className=" -z-10  absolute border-[2px] p-2 px-4 border-black rounded-md left-1 top-1  bg-black uppercase">
              try it risk-free
            </button>
            <div>
              <p>
                <i className="fa-solid fa-star  text-secondaryColor-1  "></i>
                <i className="fa-solid fa-star  text-secondaryColor-1  "></i>
                <i className="fa-solid fa-star  text-secondaryColor-1  "></i>
                <i className="fa-solid fa-star  text-secondaryColor-1  "></i>
                <i className="fa-solid fa-star  text-secondaryColor-1  "></i>
              </p>
              <p className="text-sm font-serif">5.0 Shopify rating</p>
            </div>
          </div>
        </section>
        {/* images area  */}
        <section className="basis-2/5 lg:h-[550px] lg:relative absolute -top-[1em] blur-sm lg:blur-0 right-2  ">
          <img
            src={header_img1}
            alt="header_img1"
            className="absolute h-full lg:right-4 z-10"
            width={450}
          />
          <img
            src={header_img2}
            alt="header_img2"
            width={450}
            className=" lg:absolute lg:-right-0  z-0"
          />
        </section>
      </header>
    </>
  )
}

export default Header
