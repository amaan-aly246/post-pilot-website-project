import { content } from "../Constants/Constants"
import {  motion } from "framer-motion"
import { useState, useRef } from "react"
function SectionFive() {
  const [openId, setOpenId] = useState('01')
  const container = useRef(null)

  const handleFunc = (event) => {
    event.preventDefault()
    const id = event.target.parentElement.parentElement.id
    setOpenId((prevId) => (prevId === id ? null : id))
  }

  const detailsVariant = {
    closed: {
      height: "0rem",
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
    open: {
      height: "6rem",
      transition: {
        ease: "easeIn",
        duration: 0.4,
        // delay: 2
      },
    },
  }
  return (
    <section className="bg-secondaryColor-3 py-10">
      <h1 className="text-center text-3xl lg:text-5xl font-semibold">
        Fast Launch. Fast results
      </h1>
      <p className="text-primaryColor-1 font-myFont-Playwrite text-xl lg:text-3xl text-center my-6">
        Here's how.
      </p>
      {/* container */}
      <div className=" flex flex-col ml-4 lg:ml-28 w-full " ref={container}>
        {content.map(({ heading, text, id }) => {
          return (
            <details
              className="py-4 text-left cursor-pointer "
              id={id}
              onClick={(event) => {
                handleFunc(event)
              }}
              open={openId === id}>
              <summary className="text-xl lg:text-3xl  font-semibold list-none transition-transform ">
                <span className="font-myFont-Playwrite text-primaryColor-1">
                  {id}
                </span>
                <span className="ml-8 ">{heading}</span>
              </summary>
              <motion.div
                className=" w-[20rem] lg:w-[28rem] h-[6rem] pl-12 ml-4  lg:ml-10 text-secondaryColor-2  overflow-auto text-left containerClass"
                style={{ direction: "rtl" }}
                variants={detailsVariant}
                initial="closed"
                animate={openId === id ? "open" : "closed"}>
                {text}
              </motion.div>
            </details>
          )
        })}
      </div>
    </section>
  )
}

export default SectionFive
