import React from 'react'
import Button from './Button';
import { GoChevronRight } from "react-icons/go";
import { useState } from 'react'
import InputBox from './InputBox';

const Hero = () => {

    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
    const changeBorderColor = () => {
      setIsClicked(true);
    };
  
    const resetBorderColor = () => {
      setIsClicked(false);
    };
  return (
    <div>
         <div className='flex flex-col  justify-center text-white  text-center mx-5 h-[50vh] mt-10 lg:mt-20'>
         <p className=' smm:text-[48px] text-[32px] font-bold mb-2'> Unlimited movies, TV shows, and more </p>
         <p className='text-[18px] smm:font-semibold smm:text-[24px]'> Watch anywhere. Cancel anytime.</p>
         <p className='text-[18px] mt-4  mx-[9%]  smm:text-[20px]'> Ready to watch? Enter your email to create or  restart your membership.</p>
      
        <div className='flex flex-col ss:flex-row  mx-6 ss:mx-[50px] ssinput:mx-auto '>
          <div className={`flex flex-col bg-black/40 rounded-md w-full ssinput:w-[400px] mt-4  ${ isClicked ? ' border-2 border-white ' : 'border-white/40 border' } `}
           onClick={changeBorderColor}
           onBlur={resetBorderColor}
          >

         

         
         <InputBox/>
          </div>

          <div className='flex mt-3 ss:mt-4  mx-auto ss:mx-1  focus:bg-red-400 '>
            <Button title="Get Started " color="red"  extra=" w-[130px] pl-1   justify-end  rounded-l-md  text-[18px] ss:text-[20px] font-bold  ss:font-extrabold" />
            <div className=" flex mt-0 bg-red-600
                              rounded-r-md items-center justify-center object-center ">
            <GoChevronRight  className="mr-3  w-[32px] h-[48px] font-extrabold " />
            </div>
            
          </div>
        </div>
        

        </div>
    </div>
  )
}

export default Hero