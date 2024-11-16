import React from 'react'
import { useState } from 'react'

const BasicForm = () => {
    const [Todo, setTodo]=useState("")
    const [Taskcount,setTaskcount]=useState(1)
    const [TotalTodos, setTotalTodos] = useState([
      { id: 0, Task:"Reading" }
          ])
    const [task, setTask]=useState([])
   const HandleTFChange=(e)=>{
    setTodo(e.target.value)
   }

   const HandleBtnClick=()=>{
    setTaskcount(precount=>precount+1)
    let todo={
      id:Taskcount,
      Task:Todo
      }
      setTotalTodos([...TotalTodos,todo])
  
   }

  const handleDelete=(id)=>{
    console.log("id", id)
    let filterdata=TotalTodos.filter((todo)=> todo.id!=id)
    console.log("filter data", filterdata)
    setTotalTodos(filterdata)


  }

  const handleupdate=()=>{

  }

  

  return (
    <>
<div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"80px"}}>
    <label style={{fontFamily:"Georgia", paddingRight:"10px"}} htmlFor="Tod">Input Todo</label>
    <input type="text" placeholder='Enter todo' id='Todo' onChange={HandleTFChange} />
    <button 
    style={{backgroundColor:"black", color:"white", paddingRight:"10px"}} 
    onClick={HandleBtnClick}
    >
        Create Task
        </button>
</div>

   {
    TotalTodos.map((todo)=>(

      <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
      <label style={{fontFamily:"Georgia", paddingRight:"10px"}} htmlFor="Tod">{`Task Number:${todo.id}`}</label>
      <input type="text" placeholder={todo.Task} id='Todo' readOnly onChange={HandleTFChange} />
      <button 
      style={{backgroundColor:"black", color:"white", paddingRight:"10px"}} 
      onClick={()=>{
        handleDelete(todo.id)
      }}
      >
          Delete
          </button>
          <button 
      style={{backgroundColor:"black", color:"white", paddingRight:"10px"}} 
      onClick={handleupdate}
      >
          Update
          </button>
  </div> 
    ))
   }
 
</>


  )
}

export default BasicForm
