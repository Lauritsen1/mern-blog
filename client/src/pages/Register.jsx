import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { register, reset } from '../features/auth/authSlice';

import Button from '../components/Button';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const { username, email, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error('Passwords do not match');
        } else {
            const userData = {
                username,
                email,
                password,
            };

            dispatch(register(userData));
        }
    };

    return (
        <div className='flex justify-center items-center h-full'>
            <form className='flex flex-col gap-4 md:w-96' onSubmit={onSubmit}>
                <div className='flex flex-col items-center gap-4'>
                    <div className='text-center'>
                        <h1 className='font-bold text-2xl mb-2'>
                            Register an account
                        </h1>
                        <p>
                            Or{' '}
                            <Link to='/login' className='text-indigo-600'>
                                login here
                            </Link>
                        </p>
                    </div>
                </div>
                <div>
                    <input
                        className='pl-4 w-full h-10 border rounded-t-lg'
                        type='text'
                        id='username'
                        name='username'
                        value={username}
                        placeholder='Username'
                        onChange={onChange}
                    />
                    <input
                        className='pl-4 w-full h-10 border border-t-0'
                        type='text'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={onChange}
                    />
                    <input
                        className='pl-4 w-full h-10 border border-t-0'
                        type='text'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        onChange={onChange}
                    />
                    <input
                        className='pl-4 w-full h-10 border border-t-0 rounded-b-lg'
                        id='password2'
                        name='password2'
                        value={password2}
                        type='text'
                        placeholder='Repeat password'
                        onChange={onChange}
                    />
                </div>
                <Button text='Register' />
            </form>
        </div>
    );
}

export default Register;
