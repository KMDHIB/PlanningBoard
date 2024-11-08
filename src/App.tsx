import { useState } from 'react'
import logo from './assets/uvdata.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://uvdata.dk" target="_blank">
          <img src={logo} className="logo react" alt="UVdata" />
        </a>
      </div>
      <h1>Skoleopskrivning</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
