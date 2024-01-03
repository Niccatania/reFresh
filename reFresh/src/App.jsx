import { useState } from 'react'
import axios from 'axios'
import PostList from './routes/postList'
import './App.css'

function App() {
  const [content, setContent] = useState('')

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/posts', { content});
      console.log('Post created:', response.data);
    } catch(error) {
      console.error( 'Error creating post:', error)
    }
  }
 
  return (
    <>
      <div>
       
      </div>
      <h1>Create a post</h1>
      <input
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Enter post content"></input>
      <button onClick={handleCreatePost}> Create Post</button>
      <div>
      <a href={`/postList`}> View Posts</a>
      </div>
        <p className="read-the-docs">
          Lets create a react app using vite, and then connect it to a node backend with CRUD functionality
        </p>
      
    </>
  )
}

export default App
