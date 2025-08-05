const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
let posts = require('./data.json');



// ******************************GET all posts******************************
app.get('/posts', (req, res) => {
    res.json(posts);
  });

// ******************************GET post by id******************************
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  });



// ******************************CREATE new post******************************
app.post('/posts', (req, res) => {
    const newPost = {
      userId: req.body.userId,
      id: Date.now(),    //   id: posts.length?posts[posts.length-1].id+1:1,
      title: req.body.title,
      body: req.body.body
    };
    posts.push(newPost);
    savePosts();
    res.status(201).json(newPost);
  });


// ******************************UPDATE post by id******************************
app.put('/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Post not found' });
  
    posts[index] = {
      userId: req.body.userId || posts[index].userId,
      id: posts[index].id,
      title: req.body.title,
      body: req.body.body
    };
    savePosts();
    res.json(posts[index]);
  });


// ******************************PATCH post by id******************************
app.patch('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
  
    if (req.body.title !== undefined) post.title = req.body.title;
    if (req.body.body !== undefined) post.body = req.body.body;
    if (req.body.userId !== undefined) post.userId = req.body.userId;
  
    savePosts();
    res.json(post);
  });


// ******************************DELETE post by id******************************
app.delete('/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Post not found' });
  
    posts.splice(index, 1);
    savePosts();
    res.json({ message: 'Post deleted successfully' });
  });

// ******************************Save helper******************************
function savePosts() {
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2));
}


// Run server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

