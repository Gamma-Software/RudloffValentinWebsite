import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x : [-100, 0], opacity : [0, 1] }}
        transition={{duration: 0.5}}
        className='app__header-info'>
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{marginLeft:20}}>
                <p className='p-text'>Hi, I'm </p>
                <h1 className='head-text'>Valentin</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              <p className='p-text'>Transport engineer</p>
              <p className='p-text'>Software Embedded developer</p>
              <p className='p-text'>Software/Game Mobile developer</p>
              <p className='p-text'>And Photograph</p>
            </div>
          </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity : [0, 1] }}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'>
        <img src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale : [0, 1] }}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt="profile-circle"
          className='overlay_circle'/>
      </motion.div>
      
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'>
          {[images.gitlab, images.cpp, images.python].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`cicle-${index}`}>
              <a href={`#skills`}>
                <img src={circle} alt='circle'/>
              </a>
            </div>
            ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')