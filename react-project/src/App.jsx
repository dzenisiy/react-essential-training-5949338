import {useState} from 'react';
import './App.css';

let lang = 'React';
let moon = '🌙';

function Header() {
  return (
      <header>
        <h1>Jarek's kitchen</h1>
      </header>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (<>
        <Header/>
        <main>
          <h2>some content</h2>
        </main>
      </>
  );
}

export default App;
