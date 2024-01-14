import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import '../App.css'

const Qnacom = ({question , answer }) => {
    const [Faqaction, setFaqaction] = useState(false);
   

    const Actionc = () => {
    //  console.log('Div clicked!');
     setFaqaction(!Faqaction);
   };

  return (
    <div>
        <div className=' bg-[#2D2D2D] ml-10 mr-10 mt-2 text-white text-[18px]'>
                <div className='h-[70px] transition duration-500 ease-in-out  hover:bg-[#595959] justify-between px-5 flex 
                                items-center border-b border-black border-2
                                 cursor-pointer' 
                                onClick={Actionc} >
                    <p>{question}</p>
                   
                    <p> {Faqaction ? <FaPlus /> : <IoCloseSharp/> }</p>
                </div>
                {Faqaction ? (
                 <div className='animate-fade-in  px-5 py-10 text-justify border-t-2 border-black' >
                 <p> {answer.split('<br/>').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
             </div> )
                : null  }
                
            </div>
    </div>
  )
}

export default Qnacom