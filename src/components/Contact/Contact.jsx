import React from 'react'
import { motion } from 'motion/react'


const Contact = () => {
  return (
<>
<div className='container py-11 min-h-screen'>
<div className='flex justify-between items-center flex-col  '>
<motion.h1  initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5, delay: 0.3,
                  scale: { type: "spring", visualDuration: 0.56, bounce: 0.6 },
                }}
className='text-white text-3xl relative z-10 mb-12 md:text-5xl'>Send us a message
</motion.h1>

<motion.form 
initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.5, delay: 0.6,
  scale: { type: "spring", visualDuration: 0.56, bounce: 0.6 },
}}
action="" className=' relative z-10 text-white border-gray-400 border-solid mb-4
border-[1px] pt-20 pb-5  rounded-xl flex ju stify-between items-center flex-col gap-4 px-12

'>
   <div className='flex justify-between items-center flex-col gap-2 lg:flex-row'>
   <input type="text" placeholder='Your name' className='bg-transparent
    py-2 px-3 w-60 sm:w-80 rounded-lg  border-gray-400 border-solid 
border-[1px] mr-2'/>
   <input type="email" name="email" id="" placeholder='Your email'
   className='bg-transparent
   py-2 px-3 w-60 sm:w-80 rounded-lg  border-gray-400 border-solid 
border-[1px]'
   />
   </div>
   <input type="text" placeholder='Subject' className='bg-transparent 
    py-2 px-3 lg:w-[600px] w-60 sm:w-80 rounded-lg  border-gray-400 border-solid 
border-[1px]' />
   <textarea name="" id="" className='bg-transparent border-gray-400 border-solid py-3
border-[1px] w-60 lg:w-[600px] sm:w-80 px-3 rounded-lg h-48' placeholder='Your message'></textarea>
   <button type="submit" className='secondary-btn px-8 border-gray-400 w-60
   text-gray-300 py-2 md:w-40'>Submit</button>
</motion.form>
</div>
</div>
</>
  )
}

export default Contact