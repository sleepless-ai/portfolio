import {
  Link
} from 'react-router-dom'

import { Squash as Hamburger } from 'hamburger-react'

export const Navbar = ({handleMenu, isOpen, setOpen}) => {
  return (
    <nav className="w-full h-20 fixed flex justify-between items-center px-8 z-10">
      <Link to="/"> Kazuya </Link>
      <div>
        <button onClick={handleMenu}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button> 
      </div>
    </nav>
  )
}