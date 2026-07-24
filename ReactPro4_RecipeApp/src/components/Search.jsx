import {useState, useEffect} from 'react'

export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("pizza")
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "c0a25e671f454fad9dc29276cdc1189d";


    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = res.json();
            setFoodData(data.results)
        }
        fetchFood();
    },[query])
    return(
        <>
        <div>
            <input value={query} type="text" onChange={(e)=>setQuery(e.target.value)} />
        </div>
        </>
    )
}