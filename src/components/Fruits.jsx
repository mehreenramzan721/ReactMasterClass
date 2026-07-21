import Fruit from './Fruit';

export default function Fruits() {
  // const fruits = ['Apple', 'Mango', 'Banana','Orange', 'Pineapple']
  const fruits = [
    {
      name: 'Apple',
      price: 10,
    },
    {
      name: 'Mango',
      price: 20,
    },
    {
      name: 'Banana',
      price: 30,
    },
    {
      name: 'Orange',
      price: 80,
    },
  ];
  return (
    <div>
      {/* <ul>{fruits.map(fruit => <li key= {fruit}>{fruit}</li>)}</ul> */}
      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>{fruit.name}</li>
        ))}
      </ul> */}
      <ul>
        {fruits.map((fruit) => (
          <Fruit name={fruit.name} />
        ))}
      </ul>
    </div>
  );
}
