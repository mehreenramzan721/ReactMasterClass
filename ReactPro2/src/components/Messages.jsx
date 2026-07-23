export default function Messages(){
    function handleClick(){
        console.log("Button is clicked!")
    }
    return(
    <>
        <button onClick= {handleClick}>click here!</button>
        <h1>Hello</h1>
    </>
    )
}