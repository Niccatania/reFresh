
require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
// Post model
const Post = mongoose.model('Post', { title: String });

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/posts', async (req, res) =>{
    const newPost = new Post(req.body);
    await newPost.save();
    res.json(newPost);
});

app.put('posts/:id' , async (req, res) => {
const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true });
res.json(updatedPost);
});

app.delete('/posts/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully'});
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

