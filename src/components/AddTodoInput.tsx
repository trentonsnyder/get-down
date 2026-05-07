import { useState } from 'react'

type Props = {
  onAdd: (text: string) => void
}

export function AddTodoInput({ onAdd }: Props) {
  const [text, setText] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs to get done?"
      />
      <button type="submit">Add</button>
    </form>
  )
}
