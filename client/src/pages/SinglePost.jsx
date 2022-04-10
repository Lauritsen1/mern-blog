import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSinglePost, updatePost, reset } from '../features/posts/postSlice';

function SinglePost() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const { post, isLoading, isError, message } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getSinglePost(id));

        return () => {
            dispatch(reset());
        };
    }, [navigate, isError, message, dispatch, id]);

    return (
        <div className='lg:w-[65%] lg:mx-auto'>
            <div className='my-6'>
                <h1 className='text-4xl font-bold text-gray-700 mb-1'>
                    {post.title}
                </h1>
                <div className='flex items-center gap-1'>
                    <span className='text-sm font-light text-gray-600'>
                        Username
                    </span>
                    <i className='bi bi-dot'></i>
                    <span className='text-sm font-light text-gray-600'>
                        {new Date(post.createdAt).toLocaleDateString('da-DK')}
                    </span>
                </div>
            </div>
            <div>
                <p className='text-lg font-medium text-gray-700 mb-6 leading-10'>
                    {post.subTitle}
                </p>

                <p className='text-lg font-light text-gray-500 leading-10'>
                    {post.text}
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
