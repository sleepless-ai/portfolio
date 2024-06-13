 export const containerVars = {
    initial: {
      scaleY:0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.08,0,0.25,0]
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: [0.06,0,0.22,0],
        delay: .8
      }
    }
  }
  
 export const containerLinkVars = {
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
  
export const mobileLinkVars = {
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
  
export const footerContainer = {
  initial: {
    scaleY:0,
  },
  animate: {
    scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12,0,0.39,0],
        delay: .3
    }
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.3,
      delay:.3,
      ease: [0.12,0,0.39,0],
    }
  }
}