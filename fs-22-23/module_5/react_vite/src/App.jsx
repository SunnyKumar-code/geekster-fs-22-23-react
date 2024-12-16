import styles from "./App.module.css";
import Counter from "./components/16-12-2024/Counter";
import UseStateDemo from "./components/16-12-2024/UseStateDemo";
// import { MyComp } from "./components/16-12-2024/UseStateDemo";

const App = () => {
  const name = "ABCD";
  return (
    <div>
      {/* <Counter /> */}
      <UseStateDemo />
      {/* <MyComp /> */}
    </div>
  )
}

export default App
