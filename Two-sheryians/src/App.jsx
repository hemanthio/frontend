import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
  return (
    <>
    <div className='w-full h-screen bg-zinc-300'>
    <Navbar/>
  <Cards />
  <Form />
    </div>
  
  </>
  )
}

export default App