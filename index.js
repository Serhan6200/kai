const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post.routes');

const app = express();
app.use(express.json());

mongoose
  .connect('mongodb://127.0.0.1:27017/kai')
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/test', () => {
  console.log('sdfsdfsdfsdf');
});

app.use('/post', postRoutes);

app.listen(4000, () => {
  console.log('Server is running');
});
