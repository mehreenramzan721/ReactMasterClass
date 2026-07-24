import {useState} from 'react'

export default function Form(){
    // const [name, setName ] = useState("");
    // handling multiple inputs 
    const [name, setName ] = useState({firstName:"", lastName:""});

    function handleChange(e){
        console.log(e);
        console.log(e.target.value)
        setName({...name,firstName:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return(
    <>
    <form>
        <input onChange={(e)=> handleChange(e)}  
        type="text"  
        value = {name.firstName} />
        <input onChange ={(e)=> setName({...name, lastName:e.target.value})}
        type="text"
        value={name.lastName}/>

        <button onClick={(e)=>handleSubmit(e)}>Add</button>
    </form>
    </>
    )
}