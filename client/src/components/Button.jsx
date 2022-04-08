function Button({ text }) {
    return (
        <button className='text-white font-medium bg-blue-600 hover:bg-blue-500 rounded px-4 py-2 w-full md:w-max'>
            {text}
        </button>
    );
}

export default Button;
