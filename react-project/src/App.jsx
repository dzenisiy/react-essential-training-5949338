import {useState} from 'react';
import './App.css';

let lang = "React"
let moon = "🌙"

function App() {
  const [count, setCount] = useState(0);

  return <h1>hello react {lang.toUpperCase()} {moon}</h1>;
}

export default App;
