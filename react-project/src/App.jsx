import {useState} from 'react';
import './App.css';

let lang = 'React';
let moon = '🌙';

function Header({name, year}) {
  return (
      <header>
        <h1>{name}'s kitchen</h1>
        <p>Copyright {year}</p>
      </header>
  );
}

const items = [
  'Shakshukha',
  'Babaganoush',
  'Bardak tea',
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}))

function Main({dishes}) {
  return <ul>
    {dishes.map((dish) => (
        <li key={dish.id} style={{listStyleType: "none"}}>{dish.title}</li>
    ))}
  </ul>;
}

function App() {
  const [count, setCount] = useState(0);

  return (<>
        <Header name="Alex" year={new Date().getFullYear()}/>
        <Main dishes={dishObjects}/>
      </>
  );
}

export default App;
