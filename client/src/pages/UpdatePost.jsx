import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSinglePost, updatePost, reset } from '../features/posts/postSlice';

import { toast } from 'react-toastify';
import Button from '../components/Button';

function UpdatePost() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const { user } = useSelector((state) => state.auth);
    const { post, isLoading, isError, message } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }

        if (isError) {
            console.log(message);
        }

        dispatch(getSinglePost(id));

        return () => {
            dispatch(reset());
        };
    }, [user, navigate, isError, message, dispatch, id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let title = e.target.title.value;
        let subTitle = e.target.subTitle.value;
        let text = e.target.text.value;

        if (title === '' || text === '') {
            toast.error('Please fill out all fields');
        } else {
            const postData = {
                id: post._id,
                data: {
                    user,
                    title,
                    subTitle,
                    text,
                },
            };

            dispatch(updatePost(postData));
            toast.success('Post updated');
        }
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
                        defaultValue={post.title}
                    />

                    <textarea
                        className='p-4 w-full h-32 border rounded-lg'
                        id='subTitle'
                        name='subTitle'
                        placeholder='Sub title'
                        defaultValue={post.subTitle}></textarea>

                    <textarea
                        className='p-4 w-full h-80 border rounded-lg'
                        id='text'
                        name='text'
                        placeholder='Text'
                        defaultValue={post.text}></textarea>
                </div>
                <Button text='Update post' />
            </form>
        </div>
    );
}

export default UpdatePost;
