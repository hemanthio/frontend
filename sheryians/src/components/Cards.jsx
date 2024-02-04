import React from 'react'

function Cards() {

const data =[
    {
        image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww',
        name:"Amazon Basics",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta temporibus voluptatum?"
    },
    {
        image: 'https://images.unsplash.com/photo-1626143955914-e2c1001bc7d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww',
        name:"Daily Objects",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1673548916469-cfcc10981d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww',
        name:"Apple ",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit hello namste."
    },
    
    
]

  return (
    <>
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
       {data.map((item,index)=>( <div key={index} className='w-52 bg-zinc-100    rounded-md'>
            <div className='w-full h-32 bg-zinc-300'>
                <img className='w-full h-full object-cover'
                 src={item.image} alt="" />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>{item.name}</h2>
                <p className='text-xs mt-5'>{item.description}</p>
            </div> 
        </div>
))}
        
    </div>
    </>
  )
}

export default Cards