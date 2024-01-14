
import React, { Profiler, useRef } from 'react';
import { PiTranslateBold } from "react-icons/pi";
import background from './assets/background.jpeg'
import Navbar from './components/Navbar';
import Button from './components/Button';
import { GoChevronRight } from "react-icons/go";
import Hero from './components/Hero';

import Tvpart from './components/tv';
import Download from './components/Download';
import Everywhere from './components/Everywhere';
import Profiles from './components/profiles';
import Asked from './components/Asked';
import Footer from './components/Footer';


function App() {
 
  
  
  return (
    <div className='overflow-x-hidden bg-black  '>
    <div className=' flex relative border-b-[8px] border-b-slate-800  h-[65vh] sm:h-[70vh] md:h-[98vh]   '>
      <img src={background} className='object-cover items-end object-left w-full md:object-center md:items-center md:justify-center md:scale-125 md:translate-y-[-15%]' />
      <div className='absolute top-[0px] left-0 right-0 bottom-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90'>

        {/* nvabar */}
        <div>
        <Navbar/>
        </div>
        {/* end nav bar  */}


        {/* main infomation */}
       <div>
       <Hero/>
       </div>    
        {/* main infomation */}
  
      </div>
     
    </div>



      {/* tv part */}
          <div>
            < Tvpart />
          </div>
       {/* tv part  end*/}

     {/* Download */}
    <div> <Download/> </div>
     {/* Download end */}

       {/* Everywahere */}
    <div> <Everywhere/> </div>
     {/* Everywahere end */}


       {/* Profiles */}
    <div> <Profiles/></div>
     {/* Profiles end */}


       {/* Ask */}
       <div> <Asked/></div>
     {/* Ask end */}



      {/* Footer */}
      <div> <Footer/></div>
     {/* Footer end */}
  </div>
  )
}

export default App
