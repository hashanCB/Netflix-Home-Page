import React from 'react'

import tvv from '../assets/mobile-0819.jpg'
import photos from '../assets/boxshot.png'

import downloadicon from '../assets/download-icon.gif'

const tv = () => {
  return (
    <div>

<div className=' relative  border-b-[8px] border-b-slate-800   '> 

      <div className=' smm:flex smm:w-full smm:pt-[60px] '>

        <div className=' order-1 smm:w-1/2 smm:order-2'>
              <div className='flex flex-col smm:text-[32px] smm:pt-[52px]  justify-center  text-center  smm:text-left text-white mx-5  mt-10' >

                    
              <p className='text-[32px]  smm:text-[48px] font-bold'> Download your shows to watch offline </p>
              <p className='text-[18px] smm:text-[24px] mt-4  '> Watch on Smart TVs, Playstation, Xbox, Chromecast,  Apple TV, Blu-ray players, and more.</p>

              </div> 
        </div>

        <div className='order-1  ssm:w-1/2  smm:order-1 '>
          
        <div className='  mt-[20px]  mb-[160px] w-full  '>
          <div className='relative  object-center justify-center items-center ss:px-[15%] smm:px-[10%] '>
                    <img src={tvv} alt="tv"  className='   ' />
                    
                    
                          <div className=' flex gap-8 bg-black border border-white absolute 
                          top-[70%] left-[20%] right-[21%] bottom-[10%] 
                                            smm:bottom-[9%]
                                            rounded-xl'>
                                <div className=' w-2/12  '>
                                  <img src={photos} alt="photo download" width={40} className=' mt-2 ml-4' />
                                </div>

                                <div className='flex flex-col  w-6/12 justify-center text-white '>
                                  <p className=' text-[0.875rem] font-bold text-white'> Stranger Things </p>
                                  <p className=' text-[#0071eb] text-[0.75rem]'> Downloading...</p>
                                </div>

                                <div className=' w-4/12 justify-end items-center flex'>
                                  <img src={downloadicon} alt="downloadicon" className=' h-[50px] w-auto rounded-xl '/>
                                </div>
                          </div>

           </div>

        </div>

        </div>

      </div>
       

         
     

         
          
             



       </div>
    </div>
  )
}

export default tv