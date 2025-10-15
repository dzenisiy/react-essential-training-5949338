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

function Main({dishes}) {
  return <ul>
    {dishes.map((dish) => (
        <li style={{listStyleType: "none"}}>{dish}</li>
    ))}
  </ul>;
}

function App() {
  const [count, setCount] = useState(0);

  return (<>
        <Header name="Alex" year={new Date().getFullYear()}/>
        <Main dishes={items}/>
      </>
  );
}

export default App;
