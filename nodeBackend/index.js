
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


app.get('api/posts', async (req, res) => {
    try { 
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

