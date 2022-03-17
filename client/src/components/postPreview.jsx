import { Link } from 'react-router-dom';

function postPreview() {
    return (
        <div className='shadow-lg rounded-lg border flex flex-col justify-between p-6 aspect-4/3'>

            <div className='flex flex-col gap-2 mb-6'>
                <h3 className='text-indigo-600 font-medium text-sm'>Fitness</h3>
                <h2 className='font-bold text-lg leading-6'>Someone breaks record</h2>
                <p className='font-medium text-gray-500 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum dolorem qui nulla eius neque quia blanditiis sed minima fuga.</p>
            </div>

            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='h-3/4 rounded-full aspect-square bg-indigo-600 text-indigo-300 font-bold flex justify-center items-center text-sm'>
                        RL
                    </div>
                    <div>
                        <p className='font-medium text-sm whitespace-nowrap'>Rasmus Lauritsen</p>
                        <p className='text-sm'>Feb 12, 2020</p>
                    </div>
                </div>

                <Link className='font-medium self-end text-indigo-600' to='/'>Read<i className="bi bi-arrow-right ml-1"></i></Link>

            </div>

        </div>
    )
}

export default postPreview;