import React, { useState } from 'react'

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description)

  //edit
  const updateDescription = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )
      window.location = '/'
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div
        className='modal fade'
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Edit Todo
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={updateDescription}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditTodo
