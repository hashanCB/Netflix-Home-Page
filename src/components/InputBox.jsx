import React from 'react'
import { useState } from 'react'

const InputBox = () => {
 
    const [showPlaceholder, setShowPlaceholder] = useState(false);

 

  return (
    <div>
         {showPlaceholder ? (
             <div className='text-white/50 text-[12px] text-left pl-0  ml-3 mt-[1px] h-[12px]  ' >
              Email address
              </div>
          ) : <div className='text-white/50 text-[12px] text-left pl-0  ml-3  mt-[1px]  h-[12px]  ' >
          
          </div>}
          
          <input type="email" 
                          placeholder={showPlaceholder ? '' : 'Email Address'}
                          onFocus={() => setShowPlaceholder(true)}
                          onBlur={ () => setShowPlaceholder(false) }
                          className=' w-full 
                          placeholder:text-[16px] placeholder:items-center bg-transparent  text-[18px] m-3 mt-0 mb-3 text-white placeholder:text-white/50 
                          focus:outline-none
                          '/>
    </div>
  )
}

export default InputBox