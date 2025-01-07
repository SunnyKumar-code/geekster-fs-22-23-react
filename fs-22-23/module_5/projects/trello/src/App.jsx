import { createContext, useReducer } from 'react';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
        const { typeOfList, taskTitle } = payload;
        let typeOfListToUpdate = [];

        if (typeOfList === "pending") {
          typeOfListToUpdate = state.pending;
        } else if (typeOfList === "inProgress") {
          typeOfListToUpdate = state.inProgress;
        } else if (typeOfList === "completed") {
          typeOfListToUpdate = state.completed;
        }

        const copyOfList = [...typeOfListToUpdate];
        copyOfList.push(taskTitle);

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
        /**
         * 1. Make a copy of list to be updated
         * 2. Splice the item using index
         * 3. Update the copy in state
         */
        const copyOfListToBeUpdated = state[payload.typeOfList];
        copyOfListToBeUpdated.splice(payload.index, 1, payload.newValue);

        return {
          ...state,
          [payload.typeOfList]: copyOfListToBeUpdated
        };
      case "DELETE_ITEM":
        return {};
      case "MOVE_ITEM": // Drag & Drop
        /**
         * 1. Make a copy of fromList
         * 2. Make a copy of toList
         * 3. Find the item to be moved using index
         * 4. Add new item to be moved in the toList copy
         * 5. Delete the item to be moved from the fromList copy
         * 6. Update the fromList and toList in the state copy
         */
        const fromListCopy = [...state[payload.fromList]];
        const toListCopy = [...state[payload.toList]];

        const itemToBeMoved = fromListCopy[payload.index];

        toListCopy.push(itemToBeMoved);
        fromListCopy.splice(payload.index, 1);

        return {
          ...state,
          [payload.fromList]: fromListCopy,
          [payload.toList]: toListCopy
        };

      // return {
      //   ...state,
      //   [payload.fromList]: [...state[payload.fromList]].splice(payload.index, 1),
      //   [payload.toList]: [...state[payload.toList], state[payload.fromList][payload.index]]
      // };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initData);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      <DndProvider backend={HTML5Backend}>
        <div className='list-container'>
          <CardsList typeOfList={"pending"} heading={"Pending"} />
          <CardsList typeOfList={"inProgress"} heading={"In Progress"} />
          <CardsList typeOfList={"completed"} heading={"Completed"} />
        </div>
      </DndProvider>
    </TasksContext.Provider>
  )
}

export default App

/**
 * 
 *   const initData = {
    lists: [
      {
        name: "pending",
        tasks: []
      },
      {
        name: "inProgress",
        tasks: []
      }
    ],
  };
 *
 */