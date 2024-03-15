const Post = require("../models/post.model");
const postValidations = require("../validations/post.validation");

const createPost = async (req, res) => {
  try {
    const value = await postValidations.createPostSchema.body.validateAsync(
      req.body,
    );
    await Post.create(value);
    res.send({ success: true, message: "Post Created" });
  } catch (error) {
    console.log(error);
    res.send({ error: true, message: error.details });
  }
};

const getPosts = async (req, res) => {
  try {
    const data = await Post.find({});
    res.send({ data });
  } catch (error) {
    res.send({ error: true, message: error.details });
  }
};

module.exports = { createPost, getPosts };
