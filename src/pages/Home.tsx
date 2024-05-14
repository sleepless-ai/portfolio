import {
  useEffect,
  useRef
} from "react"

import {
  useScroll,
  useTransform,
  motion
} from "framer-motion"

import {
  Hero
} from '../components/home/Hero'

export const Home = () => {
  
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )
  },[])
  
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  
  return (
    <main ref={container} className="relative h-[200vh] font-black bg-black">
      <Hero scrollYProgress={scrollYProgress}/>
      <section className="relative bg-[#D14D72] h-screen">
      </section>
    </main>
    )
}