import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(async () => {
    const response = await axios.get('http:localhost:8080/api')
  })
  return (
    <div className="App">
      {response.status}
      {response.data}
    </div>
  );
}

export default App;
