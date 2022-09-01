import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: '',
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
    

    // const registerUser = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5000/library/register', user)
    //         if (response.status === 200) {
    //             console.log('success')
    //             navigate('/library/login')//redirect to login page
    //         }
    //         else {
    //             console.log
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <h1 className='text-center'>Register</h1>
            <hr />
            <div className='flex flex-col gap-3 w-96 p-5'>
                {/* <h1>Register</h1>
                <hr />
                <input type='text' placeholder='Username'
                // value={user.name}
                //onChange={(e) => setUser({...user, name: e.target.value})}
                />
                <input type='text' placeholder='Email'
                // value={user.email}
                //onChange={(e) => setUser({...user, email: e.target.value})}
                />
                <input type='password' placeholder='Password'
                //value={user.password}
                //onChange={(e) => setUser({...user, password: e.target.value})}
                />
                <button>Register</button> */}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Username" 
                        value={user.name} 
                        onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={user.email} 
                        onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type='text' 
                        placeholder='Password' 
                        value={user.password}
                        onChange={handleChange} />
                    </Form.Group>

                    <Button variant='primary' type='submit' onClick={handleSubmit}>
                        Register
                    </Button>
                </Form>

                <Link to='/login'>Registered? Login Here</Link>
            </div>

        </div>
    )
}

export default Register;