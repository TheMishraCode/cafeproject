import React, { useState } from 'react';
import Profile from '../../assets/Profile.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { FaCartShopping } from "react-icons/fa6";
// import Sidenavbar from '../Sidenavbar/Sidenavbar';


const Navbar = () => {
    const [showmenu, setShowmenu] = useState(false)
    const handleButtonToggle = () => setShowmenu(!showmenu)
    return (
        <AnimatePresence>
        <motion.div 
        
        className='py-2 sm:py-3 relative z-20'>
            <div
                  initial={{opacity:0, y:-40}}
                  animate={{opacity:1, y:0}}
                  transition={{
                    duration: 0.5, delay: 0.4,
                  }}
                className='container flex justify-between items-center'>

                {/* {///logo section///} */}

                <div>
                    <p className='font-semibold text-gray-300 text-lg'>HEAVEN
                        <span className='text-amber-500 text-lg '> BREW </span></p>
                </div>

                {/* ////////menu section //////// */}

                <div>
                    <motion.ul

                        className='hidden md:flex lg:gap-12 font-semibold md:px-5 md:gap-7 
                        md:text-sm lg:text-lg'

                    >
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                } >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                } >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                } >
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ourServices'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                } >
                                Our Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                } >
                                Contact
                            </NavLink>
                        </li>

                    </motion.ul>
                </div>

                {/* login section  */}
                <div className='flex gap-3 items-center'>
                    <img src={Profile} alt="" className='w-20' />
                    <NavLink>
                        <GiHamburgerMenu onClick={handleButtonToggle}
                            className='text-white text-xl md:hidden' />
                    </NavLink>
                </div>
                <NavLink to="/cart">
                <FaCartShopping className='text-white text-xl hover:text-amber-500 
                hover:cursor-pointer'/>
                </NavLink>
            
            {/* mobile sidebar */}
           <AnimatePresence>
           {showmenu && (
                   <motion.div 
                   initial={{opacity:0, y:-30}}
                   animate={{opacity:1, y:0}}
                   exit={{opacity:0}}
                   className='flex justify-center items-center absolute z-30 top-32 left-0 
                   py-8 w-full  h-1/2'>
                          <div className=' m-6 bg-slate-900 w-full py-5 flex justify-center items-center rounded-lg shadow-lg
                           shadow-black '>
                              <ul className='text-gray-200 font-semibold flex flex-col gap-3'>
                              <li>
                            <NavLink to='/'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500` }
                            //  onClick={handleButtonToggle}
                             >
                                Home
                            </NavLink>
                        </li>
                              <li>
                            <NavLink to='/about'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                }         onClick={handleButtonToggle}>
                                About
                            </NavLink>
                        </li>
                              <li>
                            <NavLink to='/menu'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                }         onClick={handleButtonToggle}>
                                Menu
                            </NavLink>
                        </li>
                              <li>
                            <NavLink to='/ourServices'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                }         onClick={handleButtonToggle}>
                                Our Services
                            </NavLink>
                        </li>

                                  <li>
                            <NavLink to='/contact'
                                className={({ isActive }) =>
                                    ` cursor-pointer ${isActive ? "text-amber-500" : "text-gray-200"}
                             hover:text-amber-500`
                                }         onClick={handleButtonToggle}>
                                Contact
                            </NavLink>
                        </li>                            
                          </ul>
                          </div>
                      </motion.div>
            )}
           </AnimatePresence>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

export default Navbar;