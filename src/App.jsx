import { useState } from 'react'
import kubernetes from './kubernetes.svg'
import './App.css'
import Adlib, { CacheMeOutsideCard } from './components/Adlib'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>cards against</h1>
        <img src={kubernetes} className="kubernetes-logo" alt="logo" />

        <div>

          <Adlib />
        </div>
      </header>
    </div>
  )
}

export default App
