import React from 'react'

function Props({text,color}) {
  return (
    <>
    <button className={`px-2 py-1 ${color} rounded-md m-2`}>{text}</button>
    </>
  )
}

export default Props