import { useState } from 'react';
import UseChange from '../hooks/UseChange';

import { Link } from 'react-router-dom';

import Input from '../reusables/inputFields/Inputs';

function LogIn() {
	const [username, handleUsernameChange] = UseChange('');
	const [email, handleEmailChange] = UseChange('');
	const [password, handlePasswordChange] = UseChange('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    } else {
      const data = JSON.parse(localStorage.getItem('data'));
      console.log(data);
      if (data.username !== username) {
        alert('Username does not exist');
        return;
      } else if (data.email !== email) {
        alert('Email does not exist');
        return;
      } else if (data.password !== password) {
        alert('Password is incorrect');
        return;
      } else {
        window.location.href = '/home';
      }
    }

		handleUsernameChange('');
		handleEmailChange('');
		handlePasswordChange('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Username'
        type='text'
        value={username}
        onChange={(e) => handleUsernameChange(e)}
      />
      <Input
        label='Email'
        type='email'
        value={email}
        onChange={(e) => handleEmailChange(e)}
      />
      <Input
        label='Password'
        type='password'
        value={password}
        onChange={(e) => handlePasswordChange(e)}
      />

      <button type='submit'>Log In</button>

      <p>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </form>
  );
}

export default LogIn;
