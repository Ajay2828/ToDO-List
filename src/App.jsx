import { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'
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
    <TodoList toDos={toDos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}
