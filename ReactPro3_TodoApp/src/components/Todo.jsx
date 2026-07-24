import TodoItem from './TodoItem'
import {useState} from 'react'
import Header from './Header'

export default function Todo(){

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("")
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <Header/>
            <input onChange={(e)=> setTodo( e.target.value)} value={todo} type="text" />
            <button type="submit">Add</button>
        </form>

        {todos.map((item)=><TodoItem key={item} item ={item}/>)}
        </>
    )
}