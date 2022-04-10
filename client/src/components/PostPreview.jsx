import { Link } from 'react-router-dom';

function PostPreview({ post }) {
    return (
        <div className='flex flex-col justify-between w-full p-6 mx-auto bg-white rounded-lg shadow-md border max-w-xl'>
            <div>
                <div className='flex items-center justify-between'>
                    <span className='text-sm font-light text-gray-600'>
                        {new Date(post.createdAt).toLocaleDateString('da-DK')}
                    </span>
                    {/* <Link
                        to='/'
                        className='px-2 py-1 text-sm font-medium text-gray-100 transition-colors duration-200 transform bg-blue-600 hover:bg-blue-500 rounded cursor-pointer'>
                        Design
                    </Link> */}
                </div>

                <div className='mt-2'>
                    <Link
                        to={`/post/${post._id}`}
                        href='#'
                        className='text-2xl font-bold text-gray-700 hover:text-gray-600 hover:underline'>
                        {post.title}
                    </Link>
                    <p className='mt-2 text-gray-600'>
                        {post.subTitle
                            ? post.subTitle
                            : post.text.substring(1, 200)}
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-between mt-4'>
                <Link to='/' href='#' className='text-blue-600 hover:underline'>
                    Read more
                </Link>

                <div className='flex items-center'>
                    <Link
                        to='/'
                        className='font-medium text-gray-700 cursor-pointer'>
                        Rasmus Lauritsen
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PostPreview;
