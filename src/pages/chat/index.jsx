import React from 'react'

function index() {
  return (
    <div className='bg-grey-300'>
      <h1 className='text-5xl'>Hellooo</h1>
      <form action="">
        <input type="text" placeholder="Type your message here..." className="w-[350em] fixed bottom-10 left-10" />
        <input type="submit" name="Submit" value="Submit" id="" />
      </form>
    </div>
  )
}

export default index