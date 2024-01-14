import React from 'react'
import tvvideo from '../assets/video-devices.mp4';
import tvv from '../assets/device-pile.png'


const Everywhere = () => {
  return (

<div className=' relative  border-b-[8px] border-b-slate-800   '> 




      <div className=' smm:flex smm:w-full smm:pt-[60px]  '>

            <div className=' order-1 smm:w-1/2 smm:order-1'>
                <div className='flex flex-col smm:text-[32px] smm:pt-[52px]  justify-center  text-center  smm:text-left text-white mx-5  mt-10' >

                      
                <p className='text-[32px]  smm:text-[48px] font-bold'> Watch everywhere</p>
                <p className='text-[18px] smm:text-[24px] mt-4  '> Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

                </div> 

            </div>


            <div className='order-2  ssm:w-1/2  smm:order-2 '>
                      
                  <div className='flex relative   justify-center items-center    mt-[80px] mb-[160px]'>
                  <div className='relative'>
                      <div className='absolute bg-orange-600 top-0 left-0 right-0 bottom-0 mx-[16%] h-[110px] w-8/12 mt-[7%]'>
                          <video autoPlay loop muted poster={tvv} className=''>
                          <source src={tvvideo} type="video/mp4" />
                          Your browser does not support the video tag.
                          </video>
                      </div>
                      <img src={tvv} alt="tv" className='relative' />
                  </div>

                  </div>   
            </div>

      </div>






      
   
             



       </div>
   
    
  )
}

export default Everywhere
