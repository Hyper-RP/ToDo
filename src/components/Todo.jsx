import React, { useContext, useEffect, useState } from "react";
import { todoContext } from "../context/todoContext";

function Todo() {
  const {
    addTaskHandler,
    task,
    changeHandler,
    list,
    removeTaskHandler,
    visibilityIndex,
    setVisibilityIndex
  } = useContext(todoContext);

  const [taskEdit, setTaskEdit] = useState("");

  

  function editHandler(item, index) {
    console.log("taskEdit : " + taskEdit);
    list[index] = item;
    setTaskEdit(item);
    console.log("visibility index : ",visibilityIndex)
  }

  

  function editTask(item,index) {
    setVisibilityIndex((visibilityIndex)=>{
      const arr=[...visibilityIndex];
      arr[index]=false;
      return arr;
    })
    console.log("visibility index : ",visibilityIndex)
  }

  function visibilityHnadler(index){
    setVisibilityIndex((visibilityIndex)=>{
      const arr=[...visibilityIndex];
      arr[index]=!arr[index] ?? true;
      return arr;
    })
    console.log("visibility index : ",visibilityIndex)
    console.log(" index : ",index)

  }


  useEffect(()=>{
    console.log("cicked save : ",taskEdit)
    console.log("visibility index : ",visibilityIndex)
    

  })

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => changeHandler(e.target.value)}
          />
          <button onClick={() => addTaskHandler(task)}>add task</button>
        </div>

        <div>
          <h1>ToDo Item</h1>

          {list.map((item, index) => {
            return (
              <div key={index}>
                <div>{item}</div>
                <button onClick={() => removeTaskHandler(index)}>
                  remove task
                </button>
                <button onClick={() => visibilityHnadler(index)}>
                  {visibilityIndex[index] ? "cancel" : "edit"}
                </button>

                
                <input
                  className={visibilityIndex[index] ? "" : "active"}
                  type="text"
                  placeholder={item}
                  value={item}
                  onChange={(e) => editHandler(e.target.value, index)}
                />

                {visibilityIndex[index] ? (
                  <button onClick={() => editTask(item,index)}>save</button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
