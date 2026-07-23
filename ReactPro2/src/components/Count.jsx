import {useState} from 'react'

function Counter(){
    function handleClick(){
       return setCount (count +1 )
    }
    const [count , setCount] = useState(0)
    return(
        <>
        <div>Count value is : {count}</div>
      <button onClick= {handleClick}>click here!</button>


     </>
    )
}
export default Counter;