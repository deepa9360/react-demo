import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaTrashRestoreAlt } from "react-icons/fa";
import "./todo.css"



function TodoList() {
  const [input, setinput] = useState("")
  const [todo, settodo] = useState([])

  useEffect(() => {
    handlegetdata();

  }, [])

  const handlegetdata = async () => {
    const response = await axios.get("http://localhost:3000/todoList");
    settodo(response.data)

  }
  const handleadd = () => {
    let body = {
      id: uuidv4(),
      task: input,
    };

    axios.post("http://localhost:3000/todoList", body);

    handlegetdata()
  };

  const handledelet = async (deleteid) => {
    await axios.delete(`http://localhost:3000/todoList/${deleteid}`)

    alert("u r deleted task success")
    handlegetdata();
  };


  const handleedit = async (index) => {
    const updatetask = prompt("update u r task", todo[index].task)

    let body = {
      id: todo[index].id,
      task: updatetask
    }

    await axios.put(`http://localhost:3000/todoList/${todo[index].id} `, body)
    console.log(updatetask);

    handlegetdata();
  }
  return (

    <div className="full">
      <div className="bb" >
        <h2 className="vi">TODO List</h2>
      </div>
      <div className="six">
        <input type="text" placeholder=" What Would you like to do?" onChange={(e) => setinput(e.target.value)} className="tamil"/>
         <br/>
          <button onClick={handleadd} className="maths">Add</button>
          </div>
          <div className="bg" >
        <h2 className="bgm">Todolist</h2>
        <div className="five">
       <h2 className="one">list</h2>
       <h2 className="two">status</h2>
       <h2 className="three">edit</h2>
       <h2 className="four">close</h2>
        </div>
                  
        {todo.map((da, i) => (
          
          <div key={i}  className="mma">
           
             <div> <h1 className="don" > {i + 1}.{da.task} </h1></div>
          
            <div className="dd">
              <button  className="cmt">Completed</button>
              <button onClick={() => handleedit(i)} className="btn4" >Edit</button>
              <div onClick={() => handledelet(da.id)} className="btn6"> <FaTrashRestoreAlt /> </div>
            </div>
          </div>
         
        ))}

      </div>
    </div>
  )
}

export default TodoList;





