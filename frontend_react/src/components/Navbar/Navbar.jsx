import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toogle, setToogle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app_navbar-logo app__flex'>
        <h1>Valentin <span>RUDLOFF </span></h1>
      </div>
      <ul className='app__navbar-links'>
      {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
        <li className='app__flex p-text' key={`link-${item}`}>
          <div/>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToogle(true)}/>
        <AnimatePresence>
          {toogle && (
            <motion.div
              key='menu'
              initial={{ x: '100%'}}
              animate={{ x: '0%'}}
              exit={{ x: '100%'}}
              transition={{duration: 0.3, ease: 'easeOut'}}
            >
              <ul>
                <HiX onClick={() => setToogle(false)} />
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToogle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar