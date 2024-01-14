import React from 'react'
import { PiTranslateBold } from "react-icons/pi"; 
const Footer = () => {
  return (
    <div>
        <div className=' relative  border-b-[8px] border-b-slate-800   '> 
       <div className='mx-10 mt-10 text-white/70 text-[16px] '>
        <p className=' cursor-pointer  underline'> Questions? Contact us.</p>
       </div>

       <div className=' flex text-white/70 mt-10 text-[14px]  '>
            <div className=' w-1/2 flex flex-col mx-10 '>

                <div className=' flex flex-col   smm:flex-row space-y-4 smm:space-y-0  '>
                <div className=' smm:w-1/2 space-y-4'>
                <p className=' cursor-pointer underline'> FAQ</p>
                <p className=' cursor-pointer underline'> Account</p>
                <p className=' cursor-pointer underline'> Investor Relations</p>
                <p className=' cursor-pointer underline'> Redeem Gift Cards</p>
                <p className=' cursor-pointer underline'> Ways to Watch</p>
                </div>
                
                <div className=' smm:w-1/2  space-y-4'>
                <p className=' cursor-pointer underline'> Privacy</p>
                <p className=' cursor-pointer underline'> Corporate Infomation</p>
                <p className=' cursor-pointer underline'> Speed Test</p>
                <p className=' cursor-pointer underline'> Legal Notices</p>
                <p className=' cursor-pointer underline'> Ad choices</p>
                </div>
                </div>


            </div>

            <div className='  w-1/2    flex flex-col mx-10 '>

                <div className=' flex flex-col smm:flex-row space-y-4 smm:space-y-0 ' >
                <div className=' smm:w-1/2 space-y-4'>
                <p className=' cursor-pointer underline'> Help Center</p>
                <p className=' cursor-pointer underline'> Media Center</p>
                <p className=' cursor-pointer underline'> Jobs</p>
                <p className=' cursor-pointer underline'> Buy Gift Cards</p>
                <p className=' cursor-pointer underline'> Terms of Use</p>
                </div>

                <div className='smm:w-1/2 space-y-4'>
                <p className=' cursor-pointer underline'> Cookie Prefernces</p>
                <p className=' cursor-pointer underline'> Contact Us</p>
                <p className=' cursor-pointer underline'> Legal Guarantee</p>
                <p className=' cursor-pointer underline'> Only on Netfllix</p>
              
                </div>
                </div>


            </div>
  

       </div>


       <div className=' text-white  w-[148px] mt-10 ml-10 focus:outline-2   '> 
       <div className='flex gap-2 items-center border border-white/35 focus:border-white focus:border-2  h-[30px] p-3 rounded-md'>
        <div>
        <PiTranslateBold />
        </div>

        <div className=' '>
        <select className=' bg-transparent  w-[100px] focus:outline-0  h-[30px]  font-semibold text-[16px]'>
          <option>English    </option>
          <option>v2</option>
        </select>
        </div>
        
       
      </div>
       
       </div>


       <div className=' text-white/70 mt-5 ml-10 text-[14px]'>
        <p>
            Netfllix Portugal
        </p>
       </div>

       </div>
   

    
    </div>
  )
}

export default Footer