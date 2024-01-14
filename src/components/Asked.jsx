import React from 'react'
import { useState } from 'react'
import Qnacom from './Qnacom';
import InputBox from './InputBox';
import { GoChevronRight } from "react-icons/go";
import Button from './Button';

const Asked = () => {

    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
    const changeBorderColor = () => {
      setIsClicked(true);
    };
  
    const resetBorderColor = () => {
      setIsClicked(false);
    };

    const [Faqaction, setFaqaction] = useState(false);
   

   const Actionc = () => {
    console.log('Div clicked!');
    setFaqaction(!Faqaction);
  };


  return (
    <div className=' relative  border-b-[8px] border-b-slate-800   '> 
        <div className='flex  mb-6 flex-col  justify-center text-white text-center mx-5  mt-10' >

      
         <p className='text-[32px] font-bold'> Frequently Asked Questions</p>
         
         </div> 
           
           <Qnacom question="What is Netflix??" answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                     <br/><br/>
                     You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!" />
       
      


       <Qnacom question=" How much does Netflix cost?" answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 15.99 a month. No extra costs, no contracts." />
       
       <Qnacom question="Where can I watch?" answer="
      Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      <br/><br/>
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." />
       
     
       <Qnacom question="How do I cancel?" answer="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />
       
       <Qnacom question=" What can I watch on Netflix?" answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />
       
      
       <Qnacom question="Is Netflix good for kids?" answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
      <br/><br/>
Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." />
       
       <div className='mt-10 text-white  text-[18px] text-center justify-center flex'>
        <p> Ready to watch ? Enter youremail to create or restart your membership</p>
       </div>

       <div className='flex flex-col justify-center text-white text-center   ss:flex-row mx-[10%] ss:mx-[50px] ssinput:mx-auto'>
       <div className={`flex flex-col h-[48px]  bg-black/40 rounded-md w-full ssinput:w-[400px] mt-4  ${ isClicked ? ' border-2 border-white ' : 'border-white/40 border' } `}
           onClick={changeBorderColor}
           onBlur={resetBorderColor}
          >

         <InputBox/>
          </div>

        <div className='flex mt-3  mb-10 ss:mt-4  mx-auto ss:mx-1  focus:bg-red-400 '>
            <Button title="Get Started " color="red"  extra=" w-[110px] pr-1  justify-end  rounded-l-md text-[18ox] font-extrabold" />
            <div className=" flex mt-0 bg-red-600
                              rounded-r-md items-center justify-center object-center ">
            <GoChevronRight  className="mr-3  w-[32px] h-[48px] font-extrabold " />
            </div>
            
          </div>
    
        </div>
       </div>
  )
}

export default Asked