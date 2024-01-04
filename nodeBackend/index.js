
require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/Post');

const connectionString = process.env.MONGODB_URI;


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json())

console.log(connectionString)

// Creating/establishing the mongoose connection
mongoose.connect(connectionString);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
    console.log('Connected to MongoDB')
});


// endpoint for posting to database
app.post('/api/posts', async (req,res) => {
try{
const { content } = req.body;
// same as const content = req.body.content
const newPost = new Post({ content });
await newPost.save();
res.status(201).json(newPost);
} catch (error) {
 console.error(error);
 res.status(500).json({ error: "Internal Server Error"});
}    
});

// Retrieving posts
app.get('/api/posts', async (req, res) => {
    try { 
        const posts = await Post.find();
        console.log("hello", posts)
        res.status(200).json(posts);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
    
});

// delete post
app.delete('/api/posts/:postId', async (req, res) => {
    const postId = req.params.postId;

    try{
        const deletedPost = await Post.findByIdAndDelete(postId);

        if(!deletedPost) {
            return res.status(404).jsob({ error: 'Post not found'});
        }

        res.json({message: 'Post deleted succesfully', deletedPost });

    } catch (error) {
        console.error('Error deleting post', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.put('/api/posts/:postId', async (req, res) => {
const postId = req.params.postId;
const { content } =req.body;

try{
    const updatedPost = await Post.findByIdAndUpdate(postId, { content }, { new:true });

    if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });        
    }
    
    res.json({ message: 'Post updated succesfully' , updatedPost });
} catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal server error'});
}
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

