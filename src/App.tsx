import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './components/Header/Header'
import styles from './App.module.scss'
import { PlusCircle } from 'phosphor-react'
import { TodoBox } from './components/TodoBox/TodoBox'
import { TodoProps } from './utils/interfaces'

function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState<TodoProps[]>([])

  const handleAddNewTodo = (event: FormEvent) => {
    event.preventDefault()

    const todoAdded: TodoProps = {
      isComopleted: false,
      text: todoText
    }

    setTodos([...todos, todoAdded])
    setTodoText('')
  }

  const handleChangeTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value)
  }

  const handleRemoveTodoItem = (todoItem: string) => {
    const filteredTodos = todos.filter((item) => {
      return todoItem !== item.text
    })
    setTodos(filteredTodos)
  }

  const handleMarkAsCompleted = (todoItem: TodoProps) => {

    const todoListWithCompletedOne = todos.map((item) => {
      if (item.text === todoItem.text) {
        return { ...item, isComopleted: !todoItem.isComopleted }
      }
      return item;
    })

    setTodos(todoListWithCompletedOne)
  }

  const completedTodosCount = todos.filter((item) => item.isComopleted).length;
  const totalTodosCount = todos.length;


  return (
    <>
      <Header />
      <main className={styles.app}>
        <form onSubmit={handleAddNewTodo}>
          <input
            value={todoText}
            type="text"
            name="todoText"
            placeholder='Adicione uma nova tarefa'
            onChange={handleChangeTodoText}
            autoComplete="off"
          />
          <button type="submit">
            Criar
            <PlusCircle />
          </button>
        </form>


        <div className={styles['todo-list']}>
          <div className={styles['todo-list__header']}>
            <span>
              Tarefas criadas {totalTodosCount}
            </span>

            <span>
              Concluídas {`${completedTodosCount} de ${totalTodosCount}`}
            </span>
          </div>

          {todos.map(todo => {
            return (
              <TodoBox
                key={todo.text}
                todo={todo}
                handleRemoveTodo={handleRemoveTodoItem}
                handleMarkAsCompleted={handleMarkAsCompleted}
              />
            )
          })}
        </div>

      </main>
    </>
  )
}

export default App
