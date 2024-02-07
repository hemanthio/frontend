import React,{ useRef }  from 'react'


function Form() {
    const name = useRef(null);
    const age = useRef(null)
    const handleSubmit = (event)=>{
event.preventDefault()
console.log(name.current.value, age.current.value)
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
<input type="text"  ref={name} placeholder='name'/>
<input type="age"  ref={age} placeholder='age'/>
<input type="submit" />
    </form>
    
    </>
  )
}

export default Form