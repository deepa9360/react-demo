import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
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


  const handleedit = async (index) =>{
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


      <div  className="div">
        <h1 className="todo">TodoList</h1>
        <input type="text" placeholder=" enter your task" onChange={(e) => setinput(e.target.value)} />
        <button onClick={handleadd} className="add">Add</button>

        {todo.map((da, i) => (

          <div key={i} >
            <h1> {i + 1}.{da.task} </h1>

            <button onClick={() => handleedit(i)} className="edit">Edit</button>
            <button onClick={() => handledelet(da.id)} className="del">Delete</button>

          </div>
        ))}

      </div>

    )
  }

  export default TodoList;





