import React from 'react'
import SideNavbar from './partials/SideNavbar'

const Home = () => {
    document.title = "movie app"
  return (
   <>
  <SideNavbar />
   <div className='w-[80%] h-full  border-r-2 border-zinc-400'></div>
   
   </>
  )
}

export default Home