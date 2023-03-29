import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

function App() {

  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App">
        <Header handleChange={handleChange} inputText={inputText}></Header>

        <Menu inputText={inputText}></Menu>
          
      </div>
  )
}

export default App
