import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { HeaderIntroduction } from './components/HeaderIntroduction'
import { Button } from './components/Button'
import { TaskList } from './components/TaskList'

function App() {
  const inputRef = useRef(null)

  const [taskTitle, setTaskTitle] = useState("")

  const [allListItems, setAllListItems] = useState([{
    id: 1,
    title: "Estudar react hooks",
    onFocus: true,
  },
  {
    id: 2,
    title: "Estudar react de novo",
    onFocus: false,
  }])

  function handleAddTask(event) {
    event.preventDefault()
    const titleVerification = taskTitle.trim()

    if (!titleVerification) {
      inputRef.current.focus()
      return
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      onFocus: false,
    }

    setAllListItems((currentItems => [
      ...currentItems, newTask,
    ]
    ))

    setTaskTitle("")
    inputRef.current.focus()
  }


  const [openMenuId, setOpenMenuId] = useState(null)

  function handleFocusTask(taskId) {
    setAllListItems((currentItems) => currentItems.map((item) => ({
      ...item, onFocus: item.id === taskId
    })))

    setOpenMenuId(null)
  }

  function handleDeleteTask(taskId) {
    setAllListItems((currentItems) => currentItems.filter((item) => item.id !== taskId))
    setOpenMenuId(null)
  }

  function handleEditTask(taskId, newTitle) {
    const verifiedTitle = newTitle.trim()
    if (!verifiedTitle) return

    setAllListItems((currentItems) =>
      currentItems.map((item) => 
        item.id === taskId
          ? { ...item, title: verifiedTitle } : item
    )
  )
  setOpenMenuId(null)
}

  return (
    <>
      <header>
        <HeaderIntroduction />
      </header>
      <main>
        <section className='left-content-container'>
          <form className='field-container' onSubmit={handleAddTask}>
            <input type="text" placeholder='Nova tarefa' className='new-task-input' autoComplete='off' ref={inputRef} value={taskTitle} onChange={(event) => {
              setTaskTitle(event.target.value)
            }} />
            <Button type="submit" className="big-button purple-bg">Adicione +</Button>
          </form>
          <TaskList className="field-container task-list-container" allListItems={allListItems} setOpenMenuId={setOpenMenuId} onFocusTask={handleFocusTask} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask}/>
        </section>
        <section className='right-content-container'>

        </section>
      </main>
    </>
  )
}

export default App
