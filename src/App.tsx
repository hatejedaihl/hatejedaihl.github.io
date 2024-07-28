import { useState } from 'react'

import viteLogo from '/vite.svg'
import WebApp from '@twa-dev/sdk'

import reactLogo from './assets/react.svg'

import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        Contador: {count}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count +1
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count -1
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
          Show Alert
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App
