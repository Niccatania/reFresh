import { useState, useEffect } from 'react';
import axios from 'axios'
import { Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [updatedContent, setUpdatedContent] = useState('')

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

const handleDeletePost = async (postId) => {
    try {
        await axios.delete(`http://localhost:3000/api/posts/${postId}`);

        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch(error) {
        console.error('Error deleting post:', error);
    }
};

const handleUpdatedPost = async (postId) => {
    try {
        await axios.put(`http://localhost:3000/api/posts/${postId}`, {content: updatedContent });

        const response = await axios.get('http://localhost:3000/api/posts');
        setPosts(response.data);

        setUpdatedContent('');
    } catch ( error ) {
        console.error('Error updating post:', error);
    }
}


return (
    <div>
        <h1> Posts</h1>
        <Card>
        <CardBody>
        <ul>
            {posts.map((post) => (
               
            <li key={post._id}>

                <Text fontsize='md'>{post.content}</Text>
                <button onClick={() => handleDeletePost(post._id)}>Delete</button>  
                <input
                type='text'
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
                placeholder="New Content" 
                />
                <button onClick={() => handleUpdatedPost(post._id)}>Update Post </button>
            </li> 
           
             
            ))}
        </ul>
        </CardBody>
        </Card>

    </div>
);
}

export default PostList
