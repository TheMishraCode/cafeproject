import React from 'react'
import banner from '../../assets/Banner.jpg'

const Banner = () => {
    return (
        <>
            <div className='container py-20 md:bg-slate-900/60 px-10 md:shadow-lg
     shadow-black/50 my-10 rounded-xl'>
                <div className='grid gird-cols-1 md:grid-cols-2 gap-8'>
                    {/* img section  */}
                    <div>
                      <img className='w-[500px] h-[450px] rounded-xl object-cover shadow-lg 
                      shadow-black/60 relative z-10'
                      src={banner} alt="" /> 
                    </div>
                    {/* text section  */}
                    <div className='relative z-10 md:mt-9'>
                        <h1 className='text-6xl text-white'>Delicious croissants and more to have!</h1>
                        <p className='text-lg text-gray-300 mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut 
                        inventore assumenda impedit obcaecati quas illo vel consequatur ipsum 
                        vitae iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloremque veritatis aliquid error? 
                        Inventore laboriosam earum, aliquid quidem sint libero!</p>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner