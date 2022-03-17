import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='flex justify-center items-center'>
            <form className='flex flex-col gap-4 md:w-96' onSubmit={onSubmit}>
                <div className='flex flex-col items-center gap-4'>
                    <div className='text-center'>
                        <h1 className='font-bold text-2xl mb-2'>Login to your account</h1>
                        <p>Or <Link to='/register' className='text-indigo-600'>register here</Link></p>
                    </div>
                </div>
                <div>
                    <input className='pl-4 w-full h-10 border rounded-t-lg border-b-0' type='text' id='email' name='email' value={email} placeholder='Email' onChange={onChange} />
                    <input className='pl-4 w-full h-10 border rounded-b-lg' type='text' id='password' name='password' value={password} placeholder='Password' onChange={onChange} />
                </div>
                <Button text='Login' />
            </form>
        </div>
    )
}

export default Login;
