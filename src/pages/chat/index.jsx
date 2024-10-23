import React from 'react'
import { Button } from 'src/components/Button'
function index() {
  return (
    <div className='w-screen flex justify-center items-center'>
      <div className='w-[70em] py-10 flex flex-col gap-6 px-10 h-[80vh] overflow-auto no-scrollbar'>
        <div className='w-full'>
          <p className='float-right px-8 py-4 bg-gray-200 rounded-full'>Hello to the chat</p>
        </div>
        <div className='w-full pr-10'>
          <p className='float-left'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation
            by H. Rackham.</p>
        </div>
        <div className='w-full'>
          <p className='float-right px-8 py-4 bg-gray-200 rounded-full'>Hello to the chat</p>
        </div>
        <div className='w-full pr-10'>
          <p className='float-left'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation
            by H. Rackham.</p>
        </div>
        <div className='w-full'>
          <p className='float-right px-8 py-4 bg-gray-200 rounded-full'>Hello to the chat</p>
        </div>
        <div className='w-full pr-10'>
          <p className='float-left'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation
            by H. Rackham.</p>
        </div>
      </div>
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