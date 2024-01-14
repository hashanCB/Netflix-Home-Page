import React from 'react'
import logo  from '../assets/Netflix-Logo.svg'
import { PiTranslateBold } from "react-icons/pi";
import Button from './Button';
const Navbar = () => {
  return (
    
    <div className='flex  m-3 h-[40px]  smm:h-[60px] mt-5  mx-6 smm:ml-0 smm:mr-4 lg:mx-[29px]' >
    <div className='flex w-3/12 '>
      <img src={logo} alt="logo"  className=' w-full  h-full  ml-[-25px]' />
    </div>

    <div className=' flex w-9/12  gap-2  justify-end text-white items-center '>
      <div className='flex gap-2 items-center border border-white/35  h-[30px] p-3 rounded-md'>
        <div>
        <PiTranslateBold />
        </div>

        <div>
        <select className=' bg-transparent  focus:outline-0 w-4 ss:w-[100px] h-[30px] px-2 ss:px-0 text-[14px]'>
          <option>English</option>
          <option>Portuguese</option>
        </select>
        </div>
        
       
      </div>


       <div>
       <Button title="Sign In" color="red" extra="rounded-md h-[30px] px-4 text-[14px] font-semibold"    />
       </div>
       
        
    </div>

  </div>
  )
}

export default Navbar