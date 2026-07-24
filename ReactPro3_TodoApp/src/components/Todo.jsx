import TodoItem from './TodoItem'
import {useState} from 'react'
import Header from './Header'
import Form from './Form'
import TodoList from './TodoList'
import Footer from './Footer'
export default function Todo(){
   
    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter((todo)=>todo.done).length;
    const totalTodos = todos.length;

    return(
        <>
        <Header/>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
        </>
    )
}