import React from 'react'
import "../App.css"

const Todo = () => {
  return (
<div className='body'>
<div className='main'>
      <div>
        <input className='top-box' />
        <button className='add-btn'>Add Todo</button>
      </div>
      <div className='containt'>
        <h2>first todo</h2>
        <div>
          <button className='delete-btn'>Delete</button>
        </div>
      </div>
    </div>
</div>
  )
}

export default Todo;