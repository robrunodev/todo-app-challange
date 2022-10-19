import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './components/Header/Header'
import styles from './App.module.scss'
import { PlusCircle } from 'phosphor-react'

function App() {

  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const handleAddNewTodo = (event: FormEvent) => {
    event.preventDefault()
    setTodos([...todos, todoText])
    setTodoText('')
  }

  const handleChangeTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value)
  }


  return (
    <div className={styles.app}>
      <Header />

      <form onSubmit={handleAddNewTodo}>
        <input
          value={todoText}
          type="text"
          name="todoText"
          placeholder='Adicione uma nova tarefa'
          onChange={handleChangeTodoText}
          autoComplete="off"
        />
        <button>
          Criar
          <PlusCircle />
        </button>
      </form>

      {todos.map(todo => {
        return <p>{todo}</p>
      })}

    </div>
  )
}

export default App
