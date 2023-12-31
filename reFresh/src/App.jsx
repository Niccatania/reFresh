import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)


  return (
    <>
      <div>
      </div>
      <h1>Create a post</h1>
      <input></input>
      <button>Post</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          add to count {count}
        </button>

        <button onClick={() => setCount2((count2) => count2 + 1)}>
          add to 2nd count  {count2}
        </button>
        <p className="read-the-docs">
          Lets create a react app using vite, and then connect it to a node backend with CRUD functionality
        </p>
      </div>
    </>
  )
}

export default App
