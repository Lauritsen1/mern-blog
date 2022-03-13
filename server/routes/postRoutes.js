const express = require('express');
const router = express.Router();

const {
    getPosts,
    setPost,
    updatePost,
    deletePost
} = require('../controllers/postController');

const { private } = require('../middleware/authMiddleware');

router.get('/', getPosts);

router.post('/', private, setPost);

router.put('/:id', private, updatePost)

router.delete('/:id', private, deletePost)

module.exports = router;