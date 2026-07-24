import {useState, useEffect} from 'react'

export default function Search(){
    const [query, setQuery] = useState("pizza")
    const URL = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"


    useEffect(()=>{
        function fetchFood(){
            fetch(`${URL}`)
        }
    },[query])
    return(
        <>
        <div>
            <input value={query} type="text" onChange={(e)=>setQuery(e.target.value)} />
        </div>
        </>
    )
}