import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const res = await fetch('http://localhost:5000/library/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await res.json();
        console.log(data);
        navigate('/library/landing')
    }

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <h1 className='text-center'>Login</h1>
            <hr />
            <div className='flex flex-col gap-3 w-96 p-5'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Password'
                            onChange={handleChange} />
                    </Form.Group>

                    <Button
                        variant='primary'
                        type='submit'
                        onClick={handleSubmit}>
                        Login
                    </Button>
                </Form>
                <Link to='/register'>Register Here</Link>
            </div>
        </div>
    )
}

export default Login