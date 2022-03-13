const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');
const User = require('../models/userModel');

// @desc    Get posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();

    res.status(200).json(posts);
});

// @desc    Set post
// @route   POST /api/posts
// @access  Private
const setPost = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const post = await Post.create({
        title: req.body.title,
        snippet: req.body.snippet,
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(post);
});

// @desc    Update posts
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(400);
        throw new Error('Post not found');
    }

    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    if (post.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedPost);
});

// @desc    Delete posts
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(400);
        throw new Error('Post not found');
    }

    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    if (post.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedPost);
});

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}