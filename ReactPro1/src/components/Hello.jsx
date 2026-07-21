function displayMessage() {
  return 'HI ';
}

function Hello({name, seatNumbers, person}) {

  // console.log(props)
// destructuring:
// const {name} = props

  return (
    <div>
      {/* <h1>
        Hello world {22 + 33} {displayMessage()}
      </h1>
      <h1>
        Hello world {22 + 33} {displayMessage()}
      </h1> */}

      {/* <h1>Hello {props} </h1> */}
      {/* <h1>Hello {props.name}</h1>
      <h1>Hello {name}</h1> */}
      {/* <h1>Hello {name} ! {seatNumbers} </h1> */}
      <h1>Hello {person.name}</h1>


    </div>
  );
}
export default Hello;
