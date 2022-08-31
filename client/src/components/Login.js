import React from 'react'
import {Link} from 'react-router-dom'
const Login = ()=> {
  return (
    <div>
    <h1>Login</h1>
    <hr/>
    <input type='text' placeholder='Email'
       // value={user.email}
        //onChange={(e) => setUser({...user, email: e.target.value})}
    />
    <input type='password' placeholder='Password'
        //value={user.password}
        //onChange={(e) => setUser({...user, password: e.target.value})}
    />
    <button>Login</button>
    <Link to='/register'>Register Here</Link>
</div> 
  )
}

export default Login