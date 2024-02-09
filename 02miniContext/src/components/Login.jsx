import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username,setUsername]=useState('')
    const [password, setPassword] = useState('')

    const {setUser} =useContext(UserContext)
        const handleSubmit = (e)=>{
        e.preventDefault()
        setUsername({username,password})
    }
  return (
   <>
   <h2>login</h2>
   <input type="text" placeholder='username' 
   value={username}
   onChange={(e)=>setUsername(e.target.value)}
   />
   <input type="text" 
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
     placeholder='password'/>
   <button onClick={handleSubmit}> Submit</button>
   
   </>
  )
}

export default Login