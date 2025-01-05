import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
   <>
   <div className='container relative z-10 mt-24 min-h-screen pb-10 pt-3'>
    <div className='grid grid-cols-1 lg:grid-cols-2  gap-8'>
      
        {/* text section  */}
        <div className=''>
            <motion.h1
            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
             className='text-white text-6xl mb-9'>About Our Cafe 

            </motion.h1>
            <motion.p 
            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className='text-gray-300 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, similique 
                illum. Ab, quas dolore! Officiis id, enim iure esse velit fuga aspernatur 
                repellendus numquam ea, dicta qui consectetur architecto. Dolorum ullam a 
                eum consectetur placeat impedit quidem aspernatur repellat magni corporis 
                rerum accusamus, ipsum, quisquam dignissimos magnam eos nam. Quae esse 
                blanditiis odio, iure voluptas nulla sequi ut inventore ullam?
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium accusamus eius labore possimus. 
               Recusandae perspiciatis doloribus atque sunt optio.
           </motion.p>

        </div>
          {/* img section  */}
          <motion.div
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.2, delay: 0.8,
             scale: { type: "spring", visualDuration: 0.6, bounce: 0.6 },
           }}
          >
            <img className='w-[850px] h-[400px] object-cover rounded-xl shadow-lg shadow-black/60'
            src="https://images.unsplash.com/photo-1469631423273-6995642a6a40?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </motion.div>
    </div>
   </div>
   
   </>
  )
}

export default About