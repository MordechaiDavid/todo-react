import React, {useState} from "react";
import './App.css';
import TodoRowItem from "./components/TodoRowItem";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";
import todoTable from "./components/TodoTable";

function App() {
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);
  const [todos, setTodos] = useState( [
    {num:1, description:'feed dog', assigned:'Moti'},
    {num:2, description:'get haircut', assigned:'Moti'},
    {num:3, description:'feed fishes', assigned:'Avia'},
    {num:4, description:'feed cat', assigned:'Avia'}
  ]
  );

  const addTodo = (assigned, description)=> {
    let rowNumber = 0;
    if (todos.length > 0){

        rowNumber = todos[todos.length - 1].num + 1;
    }else {
      rowNumber = 1;
    }
    const newTodo = {
      num:rowNumber,
      description: assigned,
      assigned:description
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumbers)=> {
    let filtered = todos.filter(function (value){
      return value.num !== deleteTodoRowNumbers;
    });
    setTodos(filtered)
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button
              className={'btn btn-primary'}
              onClick={()=> setShowNewTodoForm(!showNewTodoForm)}>
            {showNewTodoForm? 'Close new Todo': 'New Todo'}
          </button>
          {showNewTodoForm &&
              <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
