import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Content = () => {

const [todo, setTodo] = useState("")
const [todos, setTodos] = useState([])
const [showFinished, setShowFinished] = useState(true)

useEffect(() => {
  let todosString=localStorage.getItem("todos")
  if(todosString){
    let todos=JSON.parse(todosString)
    setTodos(todos)
  }
}, [])

useEffect(() => {
  if(todos.length>0){
    localStorage.setItem("todos",JSON.stringify(todos))
  }
}, [todos])

const toggleFinshed =(e) => {
  setShowFinished(!showFinished)
}

const handleAdd=()=>{
  if(todo.trim() !== ""){

    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo("")
  }
}

const handleChange=(e)=>{
  setTodo(e.target.value)
}

const handleCheckbox=(e)=>{
  let id=e.target.name
  let index=todos.findIndex(item=>{
    return item.id===id
  })
  let newTodos=[...todos]
  newTodos[index].isCompleted= !newTodos[index].isCompleted
  setTodos(newTodos)
}
const handleEdit=(e,id)=>{
  
  let editTodo=todos.find(item=> item.id===id)
  setTodo(editTodo.todo)
  let newTodos=todos.filter(item=> item.id!== id)
  setTodos(newTodos)
}

const handleDelete=(e,id)=>{
  const confirmation= confirm("Are you sure you want to delete this Todo?!")
  if(confirmation){

    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
  }
}

  return (
    <div className='md:container md:w-1/2 md:mx-auto md:my-5 rounded-xl md:p-5 bg-white text-gray-500 min-h-[80vh] shadow-2xl dark:bg-gray-800 dark:text-white'>
      <h1 className='text-center font-extrabold text-3xl text-blue-800 mb-3 dark:text-blue-400'>iTask - Manage your todos at one place</h1>
      <div className='addTodo'>
        <h2 className='text-2xl font-bold p-3'>Add a Todo</h2>
        <input onChange={handleChange} value={todo} className='w-1/2 mx-3 p-2 border outline-none rounded-lg dark:border dark:bg-gray-700' type="text" />
        <button onClick={handleAdd} className='mx-4 btn disabled:bg-gray-200 dark:disabled:bg-gray-800' disabled={todo===""}>Save</button>
      </div>
      <div className='flex mx-3 mt-2 gap-2 items-center'><input type="checkbox" checked={showFinished} onChange={toggleFinshed}/><div>Show Completed Todos</div></div>
      <h2 className='text-2xl font-bold p-3 mt-4'>Your Todos</h2>
      <div className="todos">
        {todos.length===0 && <div className='mx-3'>No Todos to Display</div>}
        {todos.map(item=>{
          return (showFinished || !item.isCompleted) && (
          <div key={item.id} className=" my-3 todo px-3 flex items-center p-1 ">
          <div className={item.isCompleted?"line-through todosStyle":"todosStyle"}>
            <input type="checkbox" className='mr-3' onChange={handleCheckbox} checked={item.isCompleted} name={item.id} id=''/>
          <div>{item.todo}</div></div>
          <div className="buttons ml-4 flex">
            <button onClick={(e)=>{handleEdit(e,item.id)}} className='md:mx-2 btn'><CiEdit /></button>
            <button onClick={(e)=>{handleDelete(e,item.id)}} className='md:mx-2 btn'><MdDeleteOutline /></button>
          </div>
        </div>)
        })}
        
      </div>
    </div>
  )
}

export default Content


