function Button(props) {
    return (
        <button className='text-white font-medium bg-indigo-600 hover:bg-indigo-700 rounded px-4 py-2 w-full md:w-max'>{props.text}</button>
    )
}

export default Button;
