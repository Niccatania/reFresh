import { useState } from 'react';
import axios from 'axios'


const create = () =>{
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
<h1>Create a post</h1>
      <input
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Enter post content"></input>
      <button onClick={handleCreatePost}> Create Post</button>
      </>
)
}
export default create;