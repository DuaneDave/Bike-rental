import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../reusables/inputFields/Inputs';

function LogIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);

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

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Username'
        type='text'
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        label='Email'
        type='email'
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        label='Password'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      />

      <button type='submit'>Log In</button>

      <p>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </form>
  );
}

export default LogIn;
