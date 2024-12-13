import styles from "./App.module.css";
import MyComponent from './components/MyComponent';


const App = () => {
  const name = "ABCD";
  return (
    <div>
      <h2>This is app component</h2>
      <MyComponent />
      <div className={styles.card}>
        this is a sample card
      </div>
    </div>
  )
}

export default App
