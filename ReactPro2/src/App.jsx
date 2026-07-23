import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ConditionalComponent from './components/ConditionalComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ConditionalComponent/>
    </>
  )
}

export default App
