import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { todoContext } from './context/todoContext';
import Todo from './components/Todo';

function App() {


  return (
    <>
      <Todo/>
    </>
  );
}

export default App;
