import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  return (
    
    <>
      <div>
       
      </div>
      
      <div class="space">
      <a  href={`/postList`}> View Posts</a>
      

      </div>
      <div class="space">
      <a  href={`/create`}> Create Posts</a>
      </div>
        <p className="read-the-docs">
         A react app created using vite. Connected to a Mongo database, Node server, and uses express for routing. Some bonus technology is react router, and Chakra UI.
        </p>
      
    </>
 
  )
}

export default App
