import React from 'react'
import { Button } from 'src/components/Button'
function index() {
  return (
    <div className='w-screen flex justify-center items-centerbg-grey-300'>
      <div className='fixed bottom-10'>
        <form action="" className='w-[70em] flex gap-4 items-center justify-center'>
          <input type="text" placeholder="Type your message here..." className="w-full font-medium text-base bg-transparent placeholder-gray-400 text-gray-500 border border-1 border-grey-200 h-[54px] px-[20px] rounded-[45px]" />
          <input className="w-1/6 rounded-[45px] bg-indigo-600 font-semibold h-[54px] text-base text-white cursor-pointer" type="submit" value="Submit" />
        </form>
      </div>
      
    </div>
  )
}

export default index