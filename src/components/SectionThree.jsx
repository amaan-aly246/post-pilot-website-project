import { motion } from "framer-motion"
import React from "react"
import { btnVariant } from "../animation/animation"
import useInViewHook from "../hooks/useInViewHook"
function SectionThree() {
  const [div1, inView1] = useInViewHook()
  const [div2, inView2] = useInViewHook()
  const [div3, inView3] = useInViewHook()
  const variant = {
    hiddenLeft: {
      x: "-20%",
    },
    visibleLeft: {
      x: "0%",
      transition: {
        duration: 1,
      },
    },
    // hiddenRight: {
    //   x: "150%",
    // },

    // visibleRight: {
    //   x: "10%",
    //   transition: {
    //     duration: 1,
    //   },
    // },
  }
  return (
    <section className="bg-[#fdf3ea] z-10 ">
      {/* heading area  */}
      <h1 className="font-semibold text-xl lg:text-4xl text-center line-clamp-3 pt-2 lg:p-16 lg:mx-[8rem]">
        PostPilot makes it a{" "}
        <span className="font-myFont-Playwrite text-primaryColor-1">cinch</span>{" "}
        to send personalized, profit-generating postcards.
      </h1>
      <div className="px-10">
        {/* first  */}

        <motion.div
          className=" ml-6 lg:ml-[355px]"
          ref={div1}
          variants={variant}
          initial="hiddenLeft"
          animate={inView1 ? "visibleLeft" : "hiddenLeft"}>
          <h1 className="text-secondaryColor-7 text-xl lg:text-4xl font-semibold py-8">
            <p className="font-myFont-Playwrite text-primaryColor-1 ">
              Powerful
            </p>
            <p>
              acquisition <br />
              &retention
            </p>
          </h1>
          <div className="text-xl pb-10">
            <p>
              Send one-off or triggered campaigns to customers <br />&
              prospects. Target email leads with MailMatch™.
            </p>
          </div>
          <div className="rounded-2xl border-[1px] border-secondaryColor-2 w-[250px] lg:w-[400px] relative p-8 ">
            <i className="fa-solid fa-quote-left text-orange absolute -top-4 left-5 text-2xl"></i>
            <p className="text-left text-sm lg:text-xl">
              It’s like Klaviyo for direct mail. The results are absolutely
              insane.
            </p>
            <p className="text-left font-thin">Ash Melwani, CMO</p>
          </div>
        </motion.div>
        {/* second */}
        <motion.div
          className="  inline-block w-[500px] relative ml-6 lg:ml-[355px]"
          ref={div2}
          variants={variant}
          initial="hiddenLeft"
          animate={inView2 ? "visibleLeft" : "hiddenLeft"}>
          <h1 className="text-secondaryColor-7 text-xl lg:text-4xl font-semibold py-6 ">
            <p>
              <span className="font-myFont-Playwrite text-primaryColor-1 ">
                Fight back{" "}
              </span>
              against iOS
              <br />
              updates, jacked-up
              <br />
              CPCs & spam folders
            </p>
          </h1>
          <div className="text-sm lg:text-xl pb-6 w-[20rem] lg:w-[30rem]">
            <p>
              Deliver your message to all of your customers — for less than the
              cost of a click.{" "}
            </p>
          </div>
          <div className="rounded-2xl border-[1px] border-secondaryColor-2  w-[250px] lg:w-[450px] relative p-8 ">
            <i className="fa-solid fa-quote-left text-orange absolute -top-4 left-5 text-2xl"></i>
            <p className="text-left text-sm lg:text-xl">
              PostPilot is our new weapon against sinking email engagement and
              rising PPC costs. The results and ROI have been outstanding. It’s
              now one of our core marketing channels to increase acquisition &
              LTV.
            </p>
            <p className="text-left font-thin">Ash Melwani, CMO</p>
          </div>
        </motion.div>
        {/* third  */}
        <motion.div
          className=" ml-6 lg:ml-[355px]"
          ref={div3}
          variants={variant}
          initial="hiddenLeft"
          animate={inView3 ? "visibleLeft" : "hiddenLeft"}>
          <h1 className="text-secondaryColor-7 text-xl lg:text-4xl font-semibold py-8">
            Done for
            <span className="font-myFont-Playwrite text-primaryColor-1 ">
              {" "}
              you
            </span>
          </h1>

          <p className="text-xl pb-10 w-[20re] lg:w-[30rem]">
            From design & strategy to stamp-licking, our ecom experts help you
            every step of the way.{" "}
          </p>

          <div className="rounded-2xl border-[1px] border-secondaryColor-2 w-[250px] lg:w-[400px] relative p-8 ">
            <i className="fa-solid fa-quote-left text-orange absolute -top-4 left-5 text-2xl"></i>
            <p className="text-left text-sm lg:text-xl">
              The team is so knowledgeable and beyond helpful. I’m blown away by
              their communication, detail, and attentiveness and always feel
              like they have our best interest in mind. Definitely worth a try.
            </p>
            <p className="text-left font-thin">
              Holly Davies, Marketing Director
            </p>
          </div>
        </motion.div>
        {/* button */}
        <div className="ml-10 lg:ml-[200px]  mt-8 relative font-semibold pb-10 ">
          <button className=" bg-black z-10 border-[2px] p-1 px-4 border-black rounded-md ">
            TRY IT RISK-FREE
          </button>
          <motion.button
            className=" text-white border-[2px] p-1 px-4 border-black rounded-md  bg-orange absolute -left-1 -top-1 z-40"
            variants={btnVariant}
            initial={null}
            whileTap="tap"
            whileHover="hover">
            TRY IT RISK-FREE
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
