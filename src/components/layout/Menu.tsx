import {
  Link
} from 'react-router-dom'

import {
  motion
} from 'framer-motion'

import {
  containerVars,
  containerLinkVars,
  mobileLinkVars,
  footerContainer
} from './utils/animations'

export const Menu = () => {
  
  const links = [
      {
        title: "WORK",
        path: "/work"
      },
      {
        title: "PRODUCT",
        path: "/products"
      },
      {
        title: "ABOUT ME",
        path: "about"
      },
      {
        title: "NEWS",
        path: "/news"
      },
      {
        title: "CONTACT",
        path: "/contact"
      },
    ]
  
  return (
      <>
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed origin-right z-10 w-full flex flex-col px-8 justify-center h-screen font-semibold bg-white/15 backdrop-blur-md">
        <motion.ul 
          variants={containerLinkVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="flex flex-col gap-y-5 text-4xl mb-20">
          {
            links.map((link) => {
              return (
              <div className="overflow-hidden">
                <motion.li
                  variants={mobileLinkVars}
                >
                  <Link to={link.path}>{link.title}</Link>
                </motion.li>
              </div>
              )
            })
          }
        </motion.ul>
      </motion.div>
      <motion.div 
        variants={footerContainer}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full fixed z-10 px-8 bottom-0 flex justify-between items-center h-20">
          <div>DO MY BEST</div>
          <ul className="flex gap-x-2">
            <li>GIT</li>
            <li>INS</li>
            <li>FAC</li>
          </ul>
      </motion.div>
    </>
  )
}