import React, {useState}from 'react';
import './App.css';
import TodoBoard from "./component/TodoBoard";
import styled from 'styled-components';
const SimpleButton = styled.button`
  color:white;
  background-color : blue;
`;
const LargeButton =  styled(SimpleButton)`
 font-size: 32px;
`;
const PriamaryButton =  styled.button`
  color: ${props => props.primary ? 'white' : 'black'};
  background-color: ${props => props.primary ? 'red' : 'yellow'}
`


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
      <SimpleButton onClick={addItem}>추가</SimpleButton>
      <LargeButton>Large</LargeButton>
      <PriamaryButton primary>primary</PriamaryButton>
      <PriamaryButton>Normal</PriamaryButton>

      <TodoBoard todoList={todoList}/>
     </main>
    </div>
  );
}

export default App;


