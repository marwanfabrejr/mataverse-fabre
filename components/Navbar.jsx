'use client'
import { motion } from 'framer-motion'

import styles from '../styles'
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
    id='navbar'
  >
    <div className='absolute w-[50%] inset-0 gradient-01 z-0' />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8 relative z-10`}
    >
      <a href='#navbar'>
        <img
          src='/search.svg'
          alt='search'
          className='w-[24px] h-[24px] object-contain'
        />
      </a>
      <a href='#feedback'>
        <h2 className='font-extrabold text-[24px] leading-[30.24px] text-white'>
          FABRE
        </h2>
      </a>
      <a href='#about'>
        <img
          src='/menu.svg'
          alt='menu'
          className='w-[24px] h-[24px] object-contain'
        />
      </a>
    </div>
  </motion.nav>
)

export default Navbar
