//using ref 

// import React,{ useRef }  from 'react'


// function Form() {
//     const name = useRef(null);
//     const age = useRef(null)
//     const handleSubmit = (event)=>{
// event.preventDefault()
// console.log(name.current.value, age.current.value)
//     }
//   return (
//     <>
//     <form action="" onSubmit={handleSubmit}>
// <input type="text"  ref={name} placeholder='name'/>
// <input type="age"  ref={age} placeholder='age'/>
// <input type="submit" />
//     </form>


    
//     </>
//   )
// }

// export default Form







//using controlled components

// import React,{useState} from 'react'

// function Form() {
//     const [val, setVal] = useState({name:"",email:""});
//     const handleSubmit =(event)=>{
// event.preventDefault()
// console.log(val)
//     }
//   return (
//    <>
// <form action="" onSubmit={handleSubmit}>
// <input type="text" onChange={(event)=>setVal({...val,name:event.target.value})} placeholder='name'/>
// <input type="text" onChange={(event)=>setVal({...val,email:event.target.value})} placeholder='email'/>
// <input type="submit" />
// </form>

//    </>
//   )
// }

// export default Form






// using hooks

import React from 'react'
import {useForm} from 'react-hook-form'

function Form() {
    const {register,handleSubmit} = useForm()
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
<input type="text" {...register('name')}  placeholder='name'/>
<input type="text" {...register('email')} placeholder='email' />
<input type="submit" />

    </form>
    </>
  )
}

export default Form

