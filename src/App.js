import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {
  const [slang,setSlang] = useState("")
  useEffect(async () => {
    const response = await axios.get('/api')
    const data = response.data.message
    setSlang(data)
  },[])

  return (
    <div className="App">
      {slang}
    </div>
  );
}

export default App;
