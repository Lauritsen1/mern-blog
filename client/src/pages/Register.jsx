import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Register() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const { username, email, password, password2 } = formData;

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
                        <h1 className='font-bold text-2xl mb-2'>Register an account</h1>
                        <p>Or <Link to='/login' className='text-indigo-600'>login here</Link></p>
                    </div>
                </div>
                <div>
                    <input className='pl-4 w-full h-10 border rounded-t-lg' type='text' id='email' name='email' value={email} placeholder='Email' onChange={onChange} />
                    <input className='pl-4 w-full h-10 border border-t-0' type='text' id='username' name='username' value={username} placeholder='Username' onChange={onChange} />
                    <input className='pl-4 w-full h-10 border border-t-0' type='text' id='password' name='password' value={password} placeholder='Password' onChange={onChange} />
                    <input className='pl-4 w-full h-10 border border-t-0 rounded-b-lg' id='password2' name='password2' value={password2} type='text' placeholder='Repeat password' onChange={onChange} />
                </div>
                <Button text='Register' />
            </form>
        </div>
    )
}

export default Register;