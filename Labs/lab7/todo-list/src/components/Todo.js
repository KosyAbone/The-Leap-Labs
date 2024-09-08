import React from 'react';

function Todo() {
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