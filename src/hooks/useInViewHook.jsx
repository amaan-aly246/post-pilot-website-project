import { useRef } from "react"
import { useInView } from "framer-motion"
function useInViewHook() {
  const ref = useRef(null)
  const inView = useInView(ref)
  return [ref, inView]
}

export default useInViewHook
