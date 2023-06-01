import React, { useState } from 'react'
import "../App.css"
import { useReducer } from "react";

const initialSate = []
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": return [
      ...state,
      {
        id: state.length + 1,
        name: action.payload
      }
    ]
      break;
    default: return state;
  }

}

const Todo = () => {

  const [todos, dispatch] = useReducer(reducer, initialSate);
  const [userInput, setUserInput] = useState("");

  const handleClick = () => {
    if (userInput !== "") {
      dispatch({ type: 'ADD_TASK', payload: userInput });
      setUserInput("")
    }
    else {
      alert("Please Write Something in the Box.")
    }
  }


  return (
    <div className='body'>
      <div className='main'>
        <center>ToDO-List</center>
        <div>
          <input className='top-box' placeholder='Please add your task.....' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          <button className='add-btn' onClick={() => {
            handleClick();

          }}  >   Add Todo</button>
        </div>
        <div className='containt'>
          {
            todos.map(todos => <h2 className='todo task-done' key={todos.id} > {todos.id}. {todos.name} </h2>)
          }

          <div>
            {/* <button className='delete-btn'>Delete</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;