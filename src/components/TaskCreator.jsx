import { useState } from 'react'

export const TaskCreator = ({createNewTask}) => {

  const [newTaskName , setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewTask(newTaskName)
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