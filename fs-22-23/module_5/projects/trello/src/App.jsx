import { createContext, useReducer } from 'react';
import './App.css'
import CardsList from './components/CardsList/CardsList'

export const TasksContext = createContext();

function App() {
  const initData = {
    pending: [],
    inProgress: [],
    completed: []
  };

  const reducerFn = (
    state,
    {
      type,
      payload
    }
  ) => {
    switch (type) {
      case "ADD_ITEM":
        console.log(type, payload);
        const { typeOfList } = payload;
        let typeOfListToUpdate = [];

        if (typeOfList === "pending") {
          typeOfListToUpdate = state.pending;
        } else if (typeOfList === "inProgress") {
          typeOfListToUpdate = state.inProgress;
        } else if (typeOfList === "completed") {
          typeOfListToUpdate = state.completed;
        }

        const copyOfList = [...typeOfListToUpdate];
        copyOfList.push(payload.taskTitle);

        // return {
        //   ...state,
        //   [payload.typeOfList]: [...[state.typeOfList], taskTitle]
        // }
        // Above code is adding the task to the list of tasks i.e either pending/inprogress/completed depneding on the typeOfList

        return {
          ...state,
          // pending: copyOfList,
          // inProgress: copyOfList,
          // completed: copyOfList
          [payload.typeOfList]: copyOfList
        };
      case "EDIT_ITEM":
        return {};
      case "DELETE_ITEM":
        return {};
      case "MOVE_ITEM": // Drag & Drop
        return {};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initData);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      <div className='list-container'>
        <CardsList typeOfList={"pending"} heading={"Pending"} />
        <CardsList typeOfList={"inProgress"} heading={"In Progress"} />
        <CardsList typeOfList={"completed"} heading={"Completed"} />
      </div>
    </TasksContext.Provider>
  )
}

export default App

/**
 * 
 * 
 * Q. Write a function in JS which takes key name as input and prints the value from the object

const user = {
    name: "Dwayne",
    age: 52,
    address: "123 ABC St",
    mobile: "1231231231"
}


getValue("age") => 52
getValue("name") => Dwayne
getValue("address") => 123 ABC St


Q. Write a function in js which takes key and value as argument and add the key-value pair to the object

setKV("bloodGroup", "AB+")
const user = {
    name: "Dwayne",
    age: 52,
    address: "123 ABC St",
    mobile: "1231231231",
    bloodGroup: "AB+"
}

setKV("email", "dwayne@email.com")
const user = {
    name: "Dwayne",
    age: 52,
    address: "123 ABC St",
    mobile: "1231231231",
    bloodGroup: "AB+",
    email: "dwayne@email.com"
}


Q. Write a function in js which takes key name and the new value to update in an object

updateValue("age", 20)

const user = {
    name: "Dwayne",
    age: 20,
    address: "123 ABC St",
    mobile: "1231231231"
}


Q. Write a function in js which takes key name and deletes the key from the object

deleteValue("address")
const user = {
    name: "Dwayne",
    age: 52,
    mobile: "1231231231"
}


 */