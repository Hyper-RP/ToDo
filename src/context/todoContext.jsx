import { createContext, useEffect, useState } from "react";

export const todoContext = createContext();

export function TodoContextProvider({ children }) {
  const[visibilityIndex,setVisibilityIndex]=useState([]);
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTaskHandler(task) {
    setList((list) => [...list, task]);

    console.log("task is : ", task);
    setTask("");
  }

  function removeTaskHandler(index) {
    let fileterList = list.filter((element, i) => i !== index);

    console.log("Fileter list : ", fileterList);
    setList(fileterList);
    setTimeout(() => console.log("Updated list:", list), 1000);
  }
  useEffect(() => {
    console.log("list is : ", list);
  }, [list]);

  function editTaskHandler(item) {}

  function changeHandler(singleTask) {
    setTask(singleTask);
  }

  const value = {
    list,
    setList,
    task,
    setTask,
    visibilityIndex,
    setVisibilityIndex,
    addTaskHandler,
    removeTaskHandler,
    editTaskHandler,
    changeHandler,
  };

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}
