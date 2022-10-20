import { CheckCircle, Trash } from 'phosphor-react'
import { TodoProps } from '../../utils/interfaces'
import styles from './TodoBox.module.scss'

interface TodoBoxProps {
    todo: TodoProps,
    handleRemoveTodo: (item: string) => void,
    handleMarkAsCompleted: (item: TodoProps) => void,
}

export function TodoBox({ todo, handleRemoveTodo, handleMarkAsCompleted }: TodoBoxProps) {
    return (
        <div className={todo.isComopleted ? `${styles.todoBox} ${styles.completed}` : styles.todoBox} >
            <button
                onClick={() => handleMarkAsCompleted(todo)}
                type="button"
                title="Remove todo buttom">
                <CheckCircle />
            </button>
            <span>{todo.text}</span>
            <button
                onClick={() => handleRemoveTodo(todo.text)}
                type="button"
                title="Remove todo buttom">
                <Trash />
            </button>
        </div>
    )
}