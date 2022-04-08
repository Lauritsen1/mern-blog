import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts, reset } from '../features/posts/postSlice';

import PostPreview from '../components/PostPreview';

function Home() {
    const dispatch = useDispatch();

    const { posts, isLoading, isError, message } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getAllPosts());

        return () => {
            dispatch(reset());
        };
    }, [isError, message, dispatch]);

    const postList = posts.map((post) => (
        <PostPreview key={post._id} post={post} />
    ));

    return <div className='grid gap-6 grid-cols-1'>{posts && postList}</div>;
}

export default Home;
