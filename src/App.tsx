import { useState } from 'react'
import { Header } from './components/Header/Header'
import styles from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <Header></Header>
    </div>
  )
}

export default App
