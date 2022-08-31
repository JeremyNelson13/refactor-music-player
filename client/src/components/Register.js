import React from 'react'
import { Link } from 'react-router-dom';


const Register = () => {

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-3 w-96 p-5'>
                <h1>Register</h1>
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
                <button>Register</button>
                <Link to='/login'>Registered? Login Here</Link>
            </div>

        </div>
    )
}

export default Register;