import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './components/ui/button'
import Hero from './components/ui/custom/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Wello back this is jeet banerjee</h1>
      <Button>Click me</Button>
      {/*This is the hero section */}
      <Hero/>
    </>
  )
}

export default App
