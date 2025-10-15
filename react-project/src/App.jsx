import {useState} from 'react';
import './App.css';
import chef from './images/chef.jpg';

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
  'Bardak chai',
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({dishes, openStatus, onStatus}) {
  return (
      <>
        <div>
          <button onClick={() => onStatus(true)}>I want to be open</button>
          <h2>Welcome to this restaurant is {openStatus? "open": "closed"}</h2>
        </div>
        <main>
          <img src={chef} height={200} alt="photo of chef owner"/>
          <ul>
            {dishes.map((dish) => (
                <li key={dish.id}
                    style={{listStyleType: 'none'}}>{dish.title}</li>
            ))}
          </ul>
        </main>
      </>);
}

function App() {
  const [status, setStatus] = useState(true);

  return (<>
        <h1>The restaurant is: {status ? 'Open' : 'Closed'}</h1>
        <button onClick={() => setStatus(!status)}>
          {status ? 'Close' : 'Open'} Restaurant
        </button>
        <Header name="Alex" year={new Date().getFullYear()}/>
        <Main dishes={dishObjects} openStatus={status} onStatus={setStatus} />
      </>
  );
}

export default App;
