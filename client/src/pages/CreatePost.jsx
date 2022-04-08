import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../features/posts/postSlice';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Button from '../components/Button';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [text, setText] = useState('');

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === '' || text === '') {
            toast.error('Please fill out all fields');
        } else {
            const postData = {
                user,
                title,
                subTitle,
                text,
            };

            dispatch(createPost(postData));
            toast.success('Post created');
        }

        setTitle('');
        setText('');
    };

    return (
        <div className='lg:max-w-[65%] lg:m-auto'>
            <button
                className='text-white font-medium bg-blue-600 hover:bg-blue-500 rounded px-4 py-2 mb-6'
                onClick={() => navigate('/dashboard')}>
                <i className='bi bi-arrow-left'></i> Back
            </button>
            <form
                className='w-full flex flex-col gap-4'
                onSubmit={handleSubmit}>
                <div className='flex flex-col gap-6'>
                    <input
                        className='pl-4 w-full h-10 border rounded-lg'
                        type='text'
                        id='title'
                        name='title'
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className='p-4 w-full h-32 border rounded-lg'
                        id='subTitle'
                        name='subTitle'
                        placeholder='Sub title'
                        value={subTitle}
                        onChange={(e) =>
                            setSubTitle(e.target.value)
                        }></textarea>

                    <textarea
                        className='p-4 w-full h-80 border rounded-lg'
                        id='text'
                        name='text'
                        placeholder='Text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <Button text='Create post' />
            </form>
        </div>
    );
}

export default CreatePost;
