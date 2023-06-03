import TodoComponent, { TodoComponentProps } from "../todo/todo"

export type TodoListComponentProps = {
    todos: TodoComponentProps[]
}

const TodoListComponent = ({todos}: TodoListComponentProps) => {
  return (
    <div className="m-5">
        {todos?.map(todo => <TodoComponent key={todo.id} {...todo} />)}
    </div>
  )
}

export default TodoListComponent