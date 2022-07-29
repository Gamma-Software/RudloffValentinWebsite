import React, {useState} from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import motion from 'framer-motion'

import './Navbar.scss'
import images from '../../constants/images'

const Navbar = () => {
  const [toogle, setToogle] = React.useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app_navbar-logo'>
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className='app__navbar-links'>
      {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
        <li className='app__flex p-text' key={`link-${item}`}>
          <div/>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}    
      </ul>
      <div className='app__navbar-icon'>
        <HiMenuAlt4 onClick={() => setToogle(true)}/>
        {toogle && (
          <motion.div
            className='app__navbar-icon-menu'
            whileInView={{x: }}
          >  </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar