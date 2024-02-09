import React from 'react'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
<UserContextProvider>
<h1>react with context</h1>
</UserContextProvider>
  )
}

export default App