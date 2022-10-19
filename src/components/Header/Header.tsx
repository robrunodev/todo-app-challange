import logo from '/assets/images/todo_logo.png'
import styles from './Header.module.scss'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt='Logo Todo App' />
        </header>
    )
}
