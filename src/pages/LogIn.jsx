import UseChange from '../hooks/UseChange';
import { Link } from 'react-router-dom';

import Input from '../reusables/inputFields/Inputs';
import Container from '../reusables/container/Container';

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
      const data = JSON.parse(localStorage.getItem('user'));
      if (!data) {
        alert('User does not exist');
        return;
      } else {
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
    }

    handleUsernameChange('');
    handleEmailChange('');
    handlePasswordChange('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className='flex flex-column'>
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
        <span className='flex gap'>
          <p>Don't have an account?</p>
          <Link to='/signup' className='redirect'>
            Sign Up
          </Link>
        </span>
      </form>
    </Container>
  );
}

export default LogIn;
