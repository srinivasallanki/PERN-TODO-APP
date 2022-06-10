import { Fragment, useState, useEffect } from 'react'
import EditTodo from './EditTodo'
const ListTodo = () => {
  const [todos, setTodos] = useState([])
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const result = await response.json()
      setTodos(result)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getTodos()
  })

  //Delete
  const handelDelete = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      })
      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <Fragment>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo}/>
                </td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handelDelete(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodo
