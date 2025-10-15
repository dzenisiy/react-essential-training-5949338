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

function App() {
  const [count, setCount] = useState(0);

  return (<>
        <Header name="Alex" year={new Date().getFullYear()}/>
        <main>
          <h2>some content</h2>
        </main>
      </>
  );
}

export default App;
