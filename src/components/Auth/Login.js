import React, { useState, useContext } from 'react';
import Alert from '../UI/Alert';
import {Redirect } from 'react-router-dom'
import AuthContext from './../../context/auth/AuthContext'

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  // create context variable
  const authContext = useContext(AuthContext)

  const { login , error , isAuthenticated} = authContext

  const { email , password} = credentials

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    if(email === '' || password === '') {
      alert('please fill all fields')
    } else {
      console.log(credentials)
      // call login function
      login(credentials)
    }
  }


  if(isAuthenticated) {
    return <Redirect to='/' />

  }

 
  return (
    <div className="d-flex justify-content-center mt-5">
      <form class="text-center border border-light p-5 w-50" 
        onSubmit={handleSubmit}
      >
        <p class="h4 mb-4">Account Login</p>
        <label> Email </label>
        <input
          type="email"
          name="email"
          id="defaultLoginFormEmail"
          class="form-control mb-4"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />

        <label> Password </label>
        <input
                onChange={handleChange}
          type="password"
          name="password"
          id="defaultLoginFormPassword"
          class="form-control mb-4"
          value={password}
          placeholder="Password"
        />

        
<button class="btn btn-info btn-block my-4" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
