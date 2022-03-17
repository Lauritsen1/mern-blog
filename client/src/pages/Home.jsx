import PostPreview from '../components/PostPreview';

function Home() {
    return (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:auto-cols-auto'>
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
        </div>
    )
}

export default Home;