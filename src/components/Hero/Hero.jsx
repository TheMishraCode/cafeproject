import React from 'react'
import { Link, NavLink } from 'react-router'
import { easeIn, inertia, motion, spring } from 'motion/react'
const Hero = () => {
  return (
    <div>
      <div>
        <div className='container grid grid-cols-1 md:grid-cols-2  text-white 
          relative z-10 h-screen'>
          {/* text scetion */}
          <div className='flex flex-col justify-center text-center pt-20 pb-10 md:text-left 
          md:pt-0'>
            <motion.h1
              initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='text-5xl font-bold md:text-6xl '>YOUR MAGIC POUR.

            </motion.h1>
            <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              transition={{ delay:0.7, duration: 0.7 }}
              className='font-semibold mt-2 text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat
              enim officia explicabo vitae asperiores, odit quasi pariatur maiores? Autem.
            </motion.p>
            <div className='flex items-center justify-center gap-1 md:justify-start mt-4'>

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2, delay: 0.9,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
                }}
                className="primary-btn hover:scale-105 duration-200">
                <NavLink to='/menu'

                >
                  Coffee menu
                </NavLink>
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2, delay: 0.9,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
                }}
                className='secondary-btn hover:scale-105 duration-200'>Order coffee
              </motion.button>
            </div>
          </div>
          {/* image section */}
          <div className='flex flex-col justify-center'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero