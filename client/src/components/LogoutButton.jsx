import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';

function LogoutButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <button
            className='text-white font-medium bg-blue-600 hover:bg-blue-500 rounded px-4 py-2 w-full md:w-max'
            onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutButton;
