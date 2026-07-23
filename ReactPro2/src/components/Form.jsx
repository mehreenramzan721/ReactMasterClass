import {useState} from 'react'

export default function Form(){
    const [name, setName ] = useState("");
    function handleChange(e){
        console.log(e);
        console.log(e.target.value)
        setName(e.target.value)
    }
    return(
    <>
    <form>
        <input onChange={(e)=> handleChange(e)}  type="text"  value = {name} />
    </form>
    </>
    )
}