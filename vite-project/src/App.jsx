import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { HeaderIntroduction } from './components/HeaderIntroduction'
import { Button } from './components/Button'
import { TaskList } from './components/TaskList'

function App() {
  

  const allListItems = [
    {
      id: 1,
      title: "Estudar react hooks",
      onFocus: true,
      
    },
  ]

  return (
    <>
      <header>
        <HeaderIntroduction/>
      </header>
      <main>
        <section className='left-content-container'>
          <div className='field-container'>
            <input type="text" placeholder='Nova tarefa' className='new-task-input'/>
            <Button className="big-button purple-bg">Adicione +</Button>
          </div>
          <TaskList className="field-container task-list-container"/>
        </section>
        <section className='right-content-container'>

        </section>
      </main>
    </>
  )
}

export default App
