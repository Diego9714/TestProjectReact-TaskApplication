import { useState } from 'react'

export const TaskCreator = () => {

  const [newTaskName , setNewTaskName] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("task",newTaskName)
    setNewTaskName("")
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Escribe tu tarea"
        value={newTaskName}
        onChange={(e)=>{
          setNewTaskName(e.target.value)
        }}
      />
      <button>Save Task</button>
    </form>
  )
}