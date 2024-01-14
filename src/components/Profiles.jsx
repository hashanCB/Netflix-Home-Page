import React from 'react'
import tvvideo from '../assets/video-devices.mp4';
import kids from '../assets/kids.png'


const profiles = () => {
  return (
    <div className=' relative  border-b-[8px] border-b-slate-800   '> 


            <div className=' smm:flex smm:w-full smm:pt-[60px]  '>

            <div className=' order-1 smm:w-1/2 smm:order-2'>
                <div className='flex flex-col smm:text-[32px] smm:pt-[52px]  justify-center  text-center  smm:text-left text-white mx-5  mt-10' >

                      
                <p className='text-[32px]  smm:text-[48px] font-bold'> Create profiles for kids</p>
                <p className='text-[18px] smm:text-[24px] mt-4  '> Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>

                </div> 
            </div>


            <div className='order-2  ssm:w-1/2  smm:order-1 '>
                <div className='flex relative   justify-center items-center    mt-[80px] mb-[160px]'>
                    <div className='relative'>
                      
                        <img src={kids} alt="kids" className='relative' />
                    </div> 
                </div>   
             
            </div>

            </div>
       

         
        



       </div>
  )
}

export default profiles