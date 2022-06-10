import { Fragment, useState } from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const handlerSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      window.location = '/'
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Fragment>
      <h1 className='text-center mt-5'>PERN TodoList</h1>
      <form onSubmit={handlerSubmit}>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className='btn btn-primary' type='submit' id='button-addon2'>
            Add
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default InputTodo
