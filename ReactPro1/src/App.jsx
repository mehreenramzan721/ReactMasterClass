import Fruits from './components/Fruits';
import Hello from './components/Hello';
function App() {
  const seatNumbers = [1, 4, 7];
  const Person = {
    name: 'ron',
    age: 66,
  };
  return (
    <>
      {/* <Hello name="Mehreen" seatNumbers = {seatNumbers} person = {Person} />  */}
      <Fruits />
    </>
  );
}

export default App;
