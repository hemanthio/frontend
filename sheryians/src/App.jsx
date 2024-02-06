// import React, { useState } from 'react'

// function App() {
 
//   const [banned,setBanned] =useState(23);

//   return (
//     <>
//     <div>
//      {banned.toString()}
//      <div onClick={()=>setBanned((prev)=>prev+1)} className='px-2 w-fit py-1 cursor-pointer bg-blue-500 '>Change</div>
//     </div>
//     </>
//   )
// }

// export default App






// import React ,{useState} from 'react'

// function App() {

//   const [val,setVal] = useState({name:"hemanth",isBanned:false})
//   return (
//   <>
// <div>
//   <h1> name :{val.name}</h1>
//   <h2>isBanned: {val.isBanned.toString()}</h2>
//   <button onClick={()=>setVal({...val,isBanned: !val.isBanned})}
//   className={`px-2 py-1 bg-blue-500 ${val.isBanned ? "bg-blue-500":"bg-red-400"} rounded-full`}>change</button>
// </div>
//   </>
//   )
// }

// export default App





// import React, { useState } from 'react'

// function App() {
//   const [val,setVal] = useState({name:"hemanth",age:24})
//   return (
//     <>
// <div>
//   <button onClick={()=>{
//     setVal({...val,gender:"male"})
//     console.log(val)
//   }}>click</button>
// </div>
//     </>
//   )
// }

// export default App





// import React, { useState } from 'react'

// function App() {

//   const [val,setVal] = useState([1,2,3,4,5,6])
//   return (
//     <>
// <div>
//   {val.map((item)=><h1>{item}</h1>)}
//   <button onClick={()=>setVal(()=>{
//    return val.filter((item,index)=> index !=val.length-1)
//   })}
//   className='px-3 py-1 bg-blue-600 rounded-full'>click</button>
// </div>

//     </>
//   )
// }

// export default App




import React, { useState } from 'react'
import Cards1 from './components/Cards1'
import Props from './components/Props'
import Cards2 from './components/Cards2'

function App() {
  const [val,setVal] = useState([{name:"hemanth",age:20},{name:"arya",age:21}])
const data =[
 {name:"John",profession:"Painter", friends:false ,image:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},

 {name:"Arya",profession:"Dancer", friends:false ,image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},

 {name:"Prabhas",profession:"Actor", friends:false ,image:"https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},

 {name:"Michael",profession:"Engineer", friends:false ,image:"https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D"}
]

const [realData,setRealData] = useState(data)

const handleFriends =()=>{
  setRealData()
}

  return (
   <>
   <div className='p-5'>
   {val.map((item,index)=>( <div>
    <h1>{item.name}</h1>
   <h2>{item.age}</h2>
   </div> ))}
   <button className='px-2 py-1 rounded-full bg-blue-600'
   onClick={()=>setVal(()=>val.map((item)=>item.name=="arya" ? ({name:"arya",age:26}) : item))}>click</button>
   </div>

   <Cards1/>
   <Props text={"know more"} color={"bg-red-500"}/>
   <Props text={"Download More"} color={"bg-blue-300"}/>
  
   <div className='w-full h-screen bg-zinc-300 flex gap-10 items-center justify-center'>
     {realData.map((item,index)=>( 
      <Cards2 values={item}
      />
     ))}
     </div>
   </>
  )
}

export default App