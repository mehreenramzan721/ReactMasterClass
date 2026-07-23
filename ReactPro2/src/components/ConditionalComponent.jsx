

export default function ConditionalComponent(){
    let messageOne = <h1>This is a message 1</h1>
    let messageTwo = <h1>This is a message 2</h1>
    //component variable method:

    let message;

    const display = false;

    if(display){
            return message = <h1>This is a message 1</h1>;
        }else{
            return message = <h1>This is a message 2</h1>;
        }
    // if(display){
    //     return messageOne;
    // }else{
    //     return messageTwo;
    // }
}