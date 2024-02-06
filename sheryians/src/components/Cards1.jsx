import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Cards1() {

  const [val,setVal] = useState(false)

  return (
 <>
 <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>

  <div className='w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden'>
    <img  className={`w-full ${val===false? "-translate-x-[0%]" : "-translate-x-[100%]"} flex-shrink-0 h-full object-cover duration-200 transition-transform relative`}
     src="https://images.unsplash.com/photo-1707147671059-94dd36708ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
      <img  className={`w-full ${val===false? "-translate-x-[0%]" : "-translate-x-[100%]"}  flex-shrink-0 h-full object-cover duration-200 transition-transform relative`}
     src="https://images.unsplash.com/photo-1707145301260-8d5c3dc9f015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     <span onClick={()=>{
      setVal(()=>!val)
     }} className='w-10 h-10  bg-[#dadada7b] flex items-center justify-center rounded-full  absolute bottom-[1%] left-1/2 -translate-x-[50%]  -translate-y-[50%]'>
<FaArrowRightLong  size={'0.7em'}/>
</span>
  </div>
 </div>
 </>
  )
}

export default Cards1