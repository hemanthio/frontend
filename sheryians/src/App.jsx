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

function App() {
  const [val,setVal] = useState([{name:"hemanth",age:20},{name:"arya",age:21}])
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
   </>
  )
}

export default App