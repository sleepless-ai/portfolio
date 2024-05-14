import {
  Link
} from 'react-router-dom'

import {
  motion
} from 'framer-motion'

export const Menu = () => {
  
  const links = [
      {
        title: "Work",
        path: "/work"
      },
      {
        title: "Products",
        path: "/products"
      },
      {
        title: "About us",
        path: "about"
      },
      {
        title: "News",
        path: "/news"
      },
      {
        title: "Contact",
        path: "/contact"
      },
    ]
    
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08,
        staggerDirection: 1
      }
    },
  }
  
  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.7
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  }
  
  return (
      <>
      <motion.div 
        initial={{
          scaleX:0,
        }}
        
        animate={{
          scaleX: 1,
          transition: {
            duration: 0.3,
            ease: [0.12,0,0.39,0]
          }
        }}
        
        exit={{
          scaleX: 0,
          transition: {
            duration: 0.3,
            ease: [0.12,0,0.39,0],
            delay: .8
          }
        }}
        className="fixed origin-right z-10 w-full flex flex-col px-8 justify-center  h-screen bg-amber-400">
        <motion.ul 
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="flex flex-col gap-y-5 text-5xl mb-40">
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
        initial={{
            scaleY:0,
          }}
          
          animate={{
            scaleY: 1,
            transition: {
              duration: 0.3,
              ease: [0.12,0,0.39,0],
              delay: .3
            }
          }}
          
          exit={{
            scaleY: 0,
            transition: {
              duration: 0.3,
              delay:.3,
              ease: [0.12,0,0.39,0],
            }
          }}
        className="w-full fixed z-10 px-8 bottom-0 flex justify-between items-center h-20">
          <div>Do my best</div>
          <div>Icons</div>
      </motion.div>
    </>
  )
}