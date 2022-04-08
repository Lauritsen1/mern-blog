import axios from "axios";

const API_URL = 'http://localhost:3001/api/posts/';

const createPost = async (postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.post(API_URL, postData, config);

    return res.data;
}

const getAllPosts = async () => {

    const res = await axios.get(API_URL);

    return res.data;
}

const getSinglePost = async (id) => {

    const res = await axios.get(API_URL + id);

    return res.data;
}

const updatePost = async (id, postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.put(API_URL + id, postData, config)

    return res.data;
}

const deletePost = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.delete(API_URL + id, config)

    return res.data;
}

const postService = {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
}

export default postService;