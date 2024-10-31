import React, { useState } from 'react'
import { loginAPI } from '../Api/AuthApi';
import '../Sass/LoginComponent.scss';

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});

    const login = async () => {
        try {
            let res = await loginAPI(credentials.email, credentials.password);
            if (res.error && res.error.errors) {
                console.log(res.error.errors.message);
            }
            console.log(res);
        } catch (err) {
            console.log(err.errors.message);
        }
    }

  return (
    <div className='login-wrapper'>
      <h1>Login Component</h1>
      <div className='auth-inputs'>
        <input
            type='email'
            className='common-input'
            placeholder='Enter your Email'
            onChange={(e) => setCredentials(
                { ...credentials, email: e.target.value }
            )}
        />
        <input
            type='password'
            className='common-input'
            placeholder='Enter your Password'
            onChange={(e) => setCredentials(
                { ...credentials, password: e.target.value }
            )}
        />
      </div>
      <button onClick={login} className='login-btn'>
        Log in to linkedIn
      </button>
    </div>
  )
}
