import {useState} from 'react';
import './App.css';

let lang = 'React';
let moon = '🌙';

function Header(props) {
  return (
      <header>
        <h1>{props.name}'s kitchen</h1>
        <p>Copyright {props.year}</p>
      </header>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (<>
        <Header name="Alex" year={new Date().getFullYear()} />
        <main>
          <h2>some content</h2>
        </main>
      </>
  );
}

export default App;
