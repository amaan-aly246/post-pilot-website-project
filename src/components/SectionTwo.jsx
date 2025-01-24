import { graph } from "../Constants/Constants"
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion"
import { useEffect } from "react"
import useInViewHook from "../hooks/useInViewHook";
function SectionTwo() {
  const count1 = useMotionValue(0);
  const value = useTransform(count1, (latest) => Math.round(latest));
  const count2 = useMotionValue(0);
  const days = useTransform(count2, (latest) => Math.floor(latest));
  const [container , spanInView] = useInViewHook()

  useEffect(() => {
    let controls
    let daysControl
    if (spanInView) {
      controls = animate(count1, 20, { duration: 1.9 })
      daysControl = animate(count2, 17, { duration: 1.9 })
      return () => {
        controls.stop()
        daysControl.stop()
      }
    }
  }, [spanInView])

  return (
    <section className="bg-primaryColor-1.2 text-center p-8 text-3xl lg:text-5xl font-semibold">
      {/* text area  */}
      <div className="pt-8">
        <p className="mb-4">Why use direct mail?</p>
        <p>
          It
          <span className="text-primaryColor-1 font-myFont-Playwrite">
            {" "}
            works{" "}
          </span>
          like crazy.
        </p>
      </div>

      <div className="flex justify-evenly mt-10 gap-x-14" ref={container}>
        <div>
          <motion.span className="font-semibold text-5xl ">{value}</motion.span>{" "}
          <span className="-ml-2">X</span>
          <p className=" text-sm lg:text-xl font-normal">
            Higher response rate than email
            <span className="font-myFont-Playwrite text-primaryColor-1">&</span>
            digital
          </p>
        </div>
        <div>
          <img src={graph} alt="graph" />
          <p className="text-xl font-normal">Your message get read</p>
        </div>
        {/* 17 */}
        <div>
          <motion.span className="mr-2">{days}</motion.span>
          <span>Days</span>
          <p className="text-sm lg:text-xl font-normal">
            Lifespan of postcard vs seconds for email or SMS.{" "}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
