export default function Form(){
    function handleChange(){
        console.log("Change occured")
    }
    return(
    <>
    <form>
        <input onChange={handleChange}  type="text"  value = "firstname" />
    </form>
    </>
    )
}