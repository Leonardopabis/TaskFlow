import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { HeaderIntroduction } from './components/HeaderIntroduction'
import { Button } from './components/Button'

function App() {
  

  return (
    <>
      <header>
        <HeaderIntroduction/>
      </header>
      <main>
        <section className='left-content-container'>
          <div className='field-container'>
            <input type="text" placeholder='Nova tarefa'/>
            <Button/>
          </div>
        </section>
        <section className='right-content-container'>

        </section>
      </main>
    </>
  )
}

export default App
