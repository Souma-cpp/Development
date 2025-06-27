import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  function handleChange(event) {
    setTask(event.target.value)
  }

  function addTask() {
    if (task.trim() === "") return
    setTasks(prev => [...prev, { text: task, completed: false }])
    setTask("")
  }

  function toggleComplete(index) {
    setTasks(prev => 
      prev.map((item, i) => 
        i === index ? { ...item, completed: !item.completed } : item
      )
    )
  }

  return (
    <div className='container'>
      <div className="upper">
        <input
          name="input"
          placeholder="Enter the task"
          onChange={handleChange}
          value={task}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="content">
        <ul className="list">
          {tasks.map((item, index) => (
            <li key={index} className={item.completed ? "completed" : ""}>
              {item.text}
              <span className="delete-icon" onClick={() => toggleComplete(index)}>🗑️</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
