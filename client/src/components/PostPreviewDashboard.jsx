import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../features/posts/postSlice';

function PostPreviewDashboard({ post }) {
    const [dropDownActive, setDropDownActive] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleDropDownMenu = () => {
        if (dropDownActive) {
            setDropDownActive(false);
        } else {
            setDropDownActive(true);
        }
    };

    return (
        <div className='flex items-center justify-between shadow-md rounded-lg border p-3 mb-6'>
            <div>
                <h2 className='font-medium text-lg mb-3'>{post.title}</h2>
                <span className='text-gray-500 text-sm'>
                    {new Date(post.createdAt).toLocaleDateString('da-DK')}
                </span>
            </div>
            <div className='relative'>
                <ul
                    className={`absolute z-10 bg-white shadow-md border rounded-lg right-0 top-6 w-48 lg:flex lg:gap-3 lg:relative lg:border-0 lg:shadow-none lg:w-max lg:bg-transparent lg:inset-0 ${
                        !dropDownActive ? 'hidden' : 'block'
                    }`}>
                    <li
                        className='hover:bg-gray-100 cursor-pointer p-3 border-b lg:border-0 lg:p-0 lg:w-10 lg:h-10 lg:rounded-full lg:flex lg:justify-center lg:items-center'
                        onClick={() => navigate(`/post/update/${post._id}`)}>
                        <i className='bi bi-pencil-square text-gray-500 text-xl mr-3 lg:m-0'></i>
                        <span className='lg:hidden'>Edit</span>
                    </li>
                    <li
                        className='hover:bg-gray-100 cursor-pointer p-3 lg:border-0 lg:p-0 lg:w-10 lg:h-10 lg:rounded-full lg:flex lg:justify-center lg:items-center'
                        onClick={() => dispatch(deletePost(post._id))}>
                        <i className='bi bi-trash-fill text-gray-500 text-xl mr-3 lg:m-0'></i>
                        <span className='lg:hidden'>Delete</span>
                    </li>
                </ul>
                <i
                    className='bi bi-three-dots-vertical p-3 lg:hidden'
                    onClick={() => toggleDropDownMenu(true)}></i>
            </div>
        </div>
    );
}

export default PostPreviewDashboard;
