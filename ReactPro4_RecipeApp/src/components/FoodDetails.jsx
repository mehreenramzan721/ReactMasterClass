import {useEffect , useState} from 'react'

export default function FoodDetails({foodId}){
    const [food, setFood] = useState({})
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "c0a25e671f454fad9dc29276cdc1189d";
    useEffect(()=>{
        async function fetchFood(){
            const res= await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = res.json();
            setFood(data)
        }
    }
    ,[foodId])
    return(
        <>
        <div> Food Details {foodId}
        {food.title}
        <img src={food.image} alt="" /></div>
        </>
    )
}