import React, {useState}from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    console.log("im here", inputValue)
    setTodoList([...todoList, inputValue])
  }
  return (
    <div className="App">
     <main>
      <input value={inputValue} type='text' onChange={(event)=>console.log(event.target.value)}/>
      <button onClick={addItem}>추가</button>
     </main>
    </div>
  );
}

export default App;

//7:58 25.06.08
