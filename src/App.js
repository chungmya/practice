import React, {useState}from 'react';
import './App.css';
import TodoBoard from "./component/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }
  return (
    <div className="App">
     <main>
      <input value={inputValue} type='text' onChange={(event)=>setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
     </main>
    </div>
  );
}

export default App;


