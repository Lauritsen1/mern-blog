function Hamburger(props) {
    return (
        <div className='relative py-3' onClick={() => props.toggleNav()}>
            <div
                className={`-translate-y-1.5 w-8 h-0.5 bg-gray-600 origin-center transition-all duration-400 ${
                    !props.navActive ? '' : 'translate-y-0.5 rotate-45'
                }`}></div>
            <div
                className={`w-8 h-0.5 bg-gray-600 transition-all duration-400 ${
                    !props.navActive ? '' : '-translate-x-1.5 opacity-0'
                }`}></div>
            <div
                className={`translate-y-1.5 w-8 h-0.5 bg-gray-600 origin-center transition-all duration-400 ${
                    !props.navActive ? '' : '-translate-y-0.5 -rotate-45'
                }`}></div>
        </div>
    );
}

export default Hamburger;
