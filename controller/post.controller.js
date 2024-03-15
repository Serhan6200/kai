const Post = require("../models/post.model");

const createPost = async (req, res) => {
  try {
    await Post.create(req.body);
    res.send({ success: true, message: "Post Created" });
  } catch (error) {
    res.end({ error: true, message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const data = await Post.find({});
    res.send({ data });
  } catch (error) {
    res.end({ error: true, message: error.message });
  }
};

module.exports = { createPost, getPosts };
