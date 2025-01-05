import React from 'react'
import { MdOutlineMobileFriendly } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { motion } from 'motion/react';
const OurServices = () => {
  return (
    <>
    <div className='container py-16 relative z-10 h-screen px-10 '>
        {/* header section  */}
    <div className='text-center mt-30 '>
      <motion.h1 
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.2, delay: 0.4,
         scale: { type: "spring", visualDuration: 0.6, bounce: 0.6 },
       }}
      className='text-4xl font-semibold uppercase text-white'>Our Services
      </motion.h1>
   </div>
   {/* icons section  */}
 <motion.div 
   initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
   transition={{ delay: 0.5, duration: 0.4,  type: "spring", visualDuration: 0.6, bounce: 0.6         
    
  }}
 
 className='text-white text-lg grid grid-cols-1 sm:grid-cols-3 gap-9 mt-10  rounded-lg  border-gray-400 border-solid 
border-[1px] py-20 px-4  '>
 <div className='flex justify-center items-center gap-3 text-center text-gray-300
  hover:text-white cursor-pointer'>
   <MdOutlineMobileFriendly className='text-3xl' />
   <p>Online booking</p>
   </div>
   <div className='flex justify-center items-center gap-3 text-gray-300
    hover:text-white cursor-pointer '>
   <HiOutlineShoppingCart className='text-3xl ' />
   <p>E-shop</p>
   </div>
   <div className='flex justify-center items-center gap-3 text-gray-300
    hover:text-white cursor-pointer'>
   <TbTruckDelivery  className='text-3xl'/>
   <p>Delivery</p>
   </div>
 </motion.div>
    </div>
    </>
  )
}

export default OurServices