import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';
import styles from './NewTodoForm.module.scss';

interface NewTodoFormPros {
    handleAddNewTodo: (event: FormEvent) => void;
    inputValue: string;
    handleChangeTodoText: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function NewTodoForm({ inputValue, handleAddNewTodo, handleChangeTodoText }: NewTodoFormPros) {
    return (
        <div className={styles.NewTodoForm}>
            <form onSubmit={handleAddNewTodo}>
                <input
                    value={inputValue}
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
        </div>
    )
}