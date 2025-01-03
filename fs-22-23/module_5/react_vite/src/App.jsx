import Main from "./components/03-01-2025/Main";
import UserContextProvider from "./context/UserContext";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <div>
          <h1>App</h1>
          <Main />
        </div>
      </UserContextProvider>
    </div>
  )
}

export default App
