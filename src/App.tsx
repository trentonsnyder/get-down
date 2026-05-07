import { useTodos } from './state/useTodos'
import { AddTodoInput } from './components/AddTodoInput'
import { TodoList } from './components/TodoList'

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()

  return (
    <main>
      <h1>get down</h1>
      <AddTodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  )
}
