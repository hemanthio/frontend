import React from 'react'

function Navbar() {
  return (
    <>
    <div className='w-full px-3 py-2 flex justify-between items-center'>
      <h3>Orange</h3>
      <div className='flex p-2 bg-orange-500'>
        <h3>Favourates</h3>
        <h4>2</h4>
      </div>
    </div>
    </>
  )
}

export default Navbar