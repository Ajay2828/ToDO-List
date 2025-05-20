import { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import './styles.css'
export default function App() {
    const [toDos, setToDos] = useState([])

    function addTodo(title) {
      setToDos( (currentToDos) => {
        return [...currentToDos, {id: crypto.randomUUID(), title, completed: false}]
        })
    }
    function toggleTodo(id, completed) {
      setToDos(currentToDos => {
        return currentToDos.map(toDo => {
          if (toDo.id === id) {
            return {...toDo, completed}
          }
          return toDo
        })
      })
    }

    function deleteTodo(id) {
      setToDos(currentToDos => {
        return currentToDos.filter(toDo => toDo.id !== id)
      })
    }
  
  return (
  <>
    <NewTodoForm onSubmit={addTodo} />
    <h1 className='header'>ToDO List</h1>
    <ul className='list'>
      {toDos.length === 0 && <p className='no-todos'>No ToDos</p>}
      {toDos.map(toDo => {
        return (
        <li key={toDo.id}>
          <label>
            <input type="checkbox" checked={toDo.completed} 
            onChange={e => toggleTodo(toDo.id, e.target.checked)
            } /> 
            {toDo.title}
          </label>
          <button onClick={() => deleteTodo(toDo.id)} className='btn btn-danger'>Delete</button>
        </li>
        )
      })}
    
    </ul>
  </>
  )
}
