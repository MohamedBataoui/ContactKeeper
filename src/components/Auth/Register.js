import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import AuthContext from './../../context/auth/AuthContext'
import Alert from '../UI/Alert';

export default function Register() {
  
  // create auth context variable
  const authContext = useContext(AuthContext)
  const { register: RegisterUser, error, token } = authContext;

  const [register, setRegister] = useState({
    name:'',
    email:"",
    password:"",
    password1:"",
  });

  const { name ,email , password , password1} = register
  

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  if (error) {
    console.log(error.data);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || password1 === '') {
      alert('Fill all fields');
    } else {
     // Call register function from the provider
     if(password === password1) {
      RegisterUser({
        name,
        email,
        password
      })
     }
    }
  };

  
  if(token) {
      return <Redirect to='/' />
  }

  return (
    <>
   {error ? <Alert error={error.msg} /> : null } 
    <div className="container mt-5">
      <form
        class="text-center border border-light p-5"
        action="#!"
        onSubmit={handleSubmit}
      >
        <p class="h4 mb-4">Account Register</p>

        <input
          type="text"
          class="form-control mb-4"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          class="form-control mb-4"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <input
          type="password"
          class="form-control mb-4"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          class="form-control mb-4"
          placeholder="Confirm password"
          name="password1"
          value={password1}
          onChange={handleChange}
        />

        <button class="btn btn-info btn-block my-4" type="submit">
          Register
        </button>
      </form>
    </div>

    </>
  );
}
