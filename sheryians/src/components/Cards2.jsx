import React from 'react'

function Cards2({values}) {
   const {name,image,profession,friends} =values
  return (
    <>
    <div className='w-60 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-sky-300'>
            <img  className='w-full h-full  object-cover' src={image} alt="" />
        </div>
        <div className='w-full p-3'>
            <h3>{name}</h3>
            <h5>{profession}</h5>
            <button onClick={()=>!(friends)}
             className='px-3 py-1 text-xs text-white rounded-md bg-blue-500 '>{(friends)? "Friends":"Add friend"}</button>
        </div>
    </div>
    </>
  )
}

export default Cards2