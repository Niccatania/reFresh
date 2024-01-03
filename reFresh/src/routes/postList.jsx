import { useState, useEffect } from 'react';
import axios from 'axios'

const PostList = () => {
    const [posts, setPosts] = useState([]);

useEffect(() => {
    const fetchPosts = async () => {
        try {
        const response = await axios.get('http://localhost:3000/api/posts');
        setPosts(response.data);    
        } catch (error) {
            console.error('Error fetching posts:',error);

        }
    };

    fetchPosts();
}, []);

return (
    <div>
        <h1> Posts</h1>
        <ul>
            {posts.map((post) => (
            <li key={post._id}>
                <h3>{post.content}</h3>
            </li>    
            ))}
        </ul>
    </div>
);
}

export default PostList
