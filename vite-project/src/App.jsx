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
    {
      id: 2,
      title: "Estudar react de novo",
      onFocus: false,
    },
    {
      id: 3,
      title: "Estudar react pt3",
      onFocus: false,
    },
    {
      id: 4,
      title: "Estudar react v4",
      onFocus: false,
    },
    {
      id: 5,
      title: "Estudar react 5",
      onFocus: false,
    }
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
          <TaskList className="field-container task-list-container" allListItens={allListItems}/>
        </section>
        <section className='right-content-container'>

        </section>
      </main>
    </>
  )
}

export default App
