   /* import React from 'react'

function Cards() {

const data =[
    {
        image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww',
        name:"Amazon Basics",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta temporibus voluptatum?",
        inStock:true
    },
    {
        image: 'https://images.unsplash.com/photo-1626143955914-e2c1001bc7d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww',
        name:"Daily Objects",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        inStock:false
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1673548916469-cfcc10981d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww',
        name:"Apple ",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit hello namste.",
        inStock:false
    },
    
    
]

  return (
    <>
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
       {data.map((elem,index)=>( <div key={index} className='w-52 bg-zinc-100    rounded-md'>
            <div className='w-full h-32 bg-zinc-300'>
                <img className='w-full h-full object-cover'
                 src={elem.image} alt="" />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>{elem.name}</h2>
                <p className='text-xs mt-5'>{elem.description}</p>
            </div> 
            <button className={`px-4 py-1  text-xs
             ${elem.inStock? "bg-blue-500" : "bg-red-600" } rounded-md m-3`}>
                {elem.inStock ? "InStock" : "OutStock"}</button>
        </div>
))}
        
    </div>
    </>
  )
}

export default Cards  */



import React from 'react'

function Cards() {

    const data =[
    {
name:"Mahiya ve",
description:"lorem ipsum hii hello namste"
    },

    {
        name:"kanule kanave",
        description:"jaali leni vayuvedo pranam ithe thiselye"
            },
 {
        name:"gaali valuga",
        description:"lorem ipsum hii hello namste"
  },



]


const handleClickDownload = ()=>{
    alert("namamste")
}

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-2 items-center justify-center'>
     {data.map((elem,index)=>(
           <div key={index} className='song px-3  w-60 py-2  bg-zinc-100 rounded-md'>
           <h3 className='font-semibold  text-xl '>{elem.name}</h3>
           <p className='text-xs mt-2'>{elem.description}</p>
           <button onMouseOver={handleClickDownload} className='px-4 bg-blue-400 text-white rounded-md py-1'>Download</button>
       </div>
     ))}
    </div>
  )
}

export default Cards