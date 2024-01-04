import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Welcome to the posting website</h1>
      </div>
      
      <div>
      <a href={`/postList`}> View Posts</a>
      <div>

      </div>
      <a href={`/create`}> Create Posts</a>
      </div>
        <p className="read-the-docs">
          Lets create a react app using vite, and then connect it to a node backend with CRUD functionality
        </p>
      
    </>
  )
}

export default App
