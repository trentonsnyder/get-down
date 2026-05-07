import { useReducer } from 'react'
import { Todo, TodoId } from '../types/todo'

type Action =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: TodoId }
  | { type: 'DELETE'; id: TodoId }

function reducer(todos: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [
        ...todos,
        { id: crypto.randomUUID(), text: action.text, completed: false, createdAt: Date.now() },
      ]
    case 'TOGGLE':
      return todos.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t)
    case 'DELETE':
      return todos.filter(t => t.id !== action.id)
  }
}

export function useTodos() {
  const [todos, dispatch] = useReducer(reducer, [])

  return {
    todos,
    addTodo: (text: string) => dispatch({ type: 'ADD', text }),
    toggleTodo: (id: TodoId) => dispatch({ type: 'TOGGLE', id }),
    deleteTodo: (id: TodoId) => dispatch({ type: 'DELETE', id }),
  }
}
