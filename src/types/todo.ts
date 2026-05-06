export type TodoId = string

export type Todo = {
  id: TodoId
  text: string
  completed: boolean
  createdAt: number
}

export type FilterType = 'all' | 'active' | 'completed'
