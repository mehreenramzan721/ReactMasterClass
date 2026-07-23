import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ConditionalComponent from './components/ConditionalComponent'
import Messages from './components/Messages'

import Count from './components/Count'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ConditionalComponent/> */}
      {/* <Messages /> */}
      <Count/>
    </>
  )
}

export default App
