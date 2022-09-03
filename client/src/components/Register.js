import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const res = await fetch('http://localhost:5000/library/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await res.json();
        console.log(data);
        navigate('/login');
    }

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <h1 className='text-center'>Register</h1>
            <hr />
            <div className='flex flex-col gap-3 w-96 p-5'>
                <Form action='/library' method='POST' onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                        type="text" 
                        name='name'
                        placeholder="Username" 
                        value={user.name} 
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        name='email'
                        placeholder="Enter email" 
                        value={user.email} 
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type='password' 
                        name='password'
                        placeholder='Password' 
                        value={user.password}
                        onChange={handleChange}
                         />
                    </Form.Group>

                    <Button variant='primary' type='submit'>
                        Register
                    </Button>
                </Form>

                <Link to='/login'>Registered? Login Here</Link>
            </div>

        </div>
    )
}

export default Register;