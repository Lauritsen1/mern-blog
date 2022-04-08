import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, reset } from '../features/posts/postSlice';

import PostPreviewDashboard from '../components/PostPreviewDashboard';

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { posts, isLoading, isError, message } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }

        if (isError) {
            console.log(message);
        }

        dispatch(getAllPosts());

        return () => {
            dispatch(reset());
        };
    }, [user, navigate, isError, message, dispatch]);

    const postList = posts.map((post) => (
        <PostPreviewDashboard key={post._id} post={post} />
    ));

    return (
        <div className='lg:w-[65%] lg:mx-auto'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-4xl'>{user && user.username}</h1>
                <Link
                    to='/post/create'
                    className='inline-block text-white font-medium bg-green-600 hover:bg-green-700 rounded px-4 py-2 w-max'>
                    Create
                </Link>
            </div>

            <div>{postList}</div>
        </div>
    );
}

export default Dashboard;
