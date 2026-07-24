import { useState } from 'react'
import Todo from './components/Todo'
import InlineComponent from './components/InlineComponent'
import OutlineComponent from './components/OutlineComponent'
import styles from './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className ="App">
      <Todo/>


      {/* <InlineComponent/> */}
      {/* <OutlineComponent/> */}
    </div>
  )
}

export default App
