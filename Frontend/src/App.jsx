import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App font-opensans'>
        <Homepage />
      </div>
    </>
  )
}

export default App
