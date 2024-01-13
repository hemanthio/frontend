import React from 'react'

function Navbar() {
  return (
   <>
   <div className=' flex justify-center cursor: auto '>
    <ul className=
    'flex gap-2  px-4 py-2 text-sm rounded-3xl m-3 
     font-normal font-sans text-white  bg-slate-950 cursor-pointer ' >
        <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1  hover:bg-opacity-20 '>HOME</li>
        <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'>ABOUT</li>
        <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'>CONTACT</li>
        <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'>BLOG</li>
    </ul>
   </div>
   
   </>
  )
}

export default Navbar