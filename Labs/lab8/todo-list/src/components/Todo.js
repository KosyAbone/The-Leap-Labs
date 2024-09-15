import React, {useState} from 'react';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodos = () => {
        if(newTodo === '') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

  return (
    <div style={{textAlign: 'center'}}>
        <h1 style={{textAlign: 'center', color: 'darkblue'}}>My Todo List</h1>
        <div>
            <input
                type="text"
                placeholder='Add a new task'
                style={{width: '40%', padding: '10px', margin: '10px'}}
            />
            <button
                style={{
                    padding: '5px 10px', 
                    marginLeft: '5px',
                    backgroundColor: 'darkblue',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Add
            </button>
        </div>
        <ul style={{listStyleType: 'circle', paddingLeft: '20px'}}>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
    </div>
  )
}

export default Todo