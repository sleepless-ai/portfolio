import {
  motion,
  useTransform
} from 'framer-motion'

export const Hero = ({scrollYProgress}) => {
  
  const scale = useTransform(scrollYProgress, [0,1],[1, 0.8])
  
  return(
      <motion.section style={{scale}} className="sticky bg-[#FEF2F4] top-0 h-screen text-4xl flex flex-col justify-center items-center gap-y-8">
        <div className="flex flex-col justify-center items-center gap-y-8 mb-32">
          <div className="text-sm font-normal text-center px-8">
            TOMATE TU TIEMPO
          </div>
          <div className="px-4 py-16 my-10 bg-[#D14D72] text-center">
            <h3>I 'M</h3>
            <h3>KAZUYA</h3>
          </div>
          <div className="text-sm font-normal text-center px-8">
            UN ESTUDIANTE CON UNA GRAN PASION POR EL MUNDO DEL DESARROLLO Y LA TECNOLOGÍA 
          </div>
        </div>
        <div className="absolute w-full flex flex-col bottom-24 items-center gap-y-2">
          <div className="text-sm w-full flex justify-between px-8 font-normal">
            <h3>WEB DEVELOPMENT</h3>
            <h3>DATA SCIENCE</h3>
          </div>
          <div className="text-center">
            LOVE FOR TECH
          </div>
        </div>
      </motion.section>
    )
}