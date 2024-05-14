import {
  Navbar,
  Menu
} from "./components/layout";

import {
  useState,
} from 'react';

import {
  AnimatePresence
} from 'framer-motion'

export const Layout = ({children}) => {
  
  const [ isOpen, setOpen ] = useState(false)
  
  const handleMenu = () => {
    setIsOpen(prev => !prev)
  }
  
  return (
    <div className="font-roboto font-semibold">
      <AnimatePresence>
      {
        isOpen &&
        <Menu/>
      }
      </AnimatePresence>
      <Navbar 
        handleMenu={handleMenu}
        isOpen={isOpen}
        setOpen={setOpen}
      />
        {children}
    </div>
  )
}