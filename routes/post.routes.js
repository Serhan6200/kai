const express = require('express');

const router = express.Router();
const { getPosts, createPost } = require('../controller/post.controller');

router.get('/getPosts', getPosts);
router.post('/createPost', createPost);

module.exports = router;
