import TodoItem from "./TodoItem"

export default function TodoList({ toDos, toggleTodo, deleteTodo }) {
    return (
        <ul className='list'>
        {toDos.length === 0 && <p className='no-todos'>No ToDos</p>}
        {toDos.map(toDo => {
            return (
            <TodoItem 
                id={toDo.id} 
                completed={toDo.completed} 
                title={toDo.title} 
                key={toDo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
            )
        })}
        
        </ul>
    )
}