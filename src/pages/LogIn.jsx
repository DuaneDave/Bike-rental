import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../components/api/apiSlice';
import UseChange from '../hooks/UseChange';

import sessionStorage from '../helpers/sessions';

import Input from '../reusables/inputFields/Inputs';
import Container from '../reusables/container/Container';

function LogIn() {
  const [username, handleUsernameChange] = UseChange('');
  const [email, handleEmailChange] = UseChange('');
  const [password, handlePasswordChange] = UseChange('');

  const navigate = useNavigate();
  const { data: users } = useGetUsersQuery();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    } else {
      const user =
        users.find(
          (user) =>
            user.name === username &&
            user.email === email &&
            user.password === password
        ) || null;

      if (!user) {
        alert('User does not exist');
        return;
      } else {
        sessionStorage('set', user);
        navigate('/home');
      }
    }
  };

  return (
    <Container>
      <div className='form-container flex flex-column'>
        <span className='flex flex-column center greeting'>
          <h2>Welcome back!</h2>
          <p>Log into your account.</p>
        </span>
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
      </div>
    </Container>
  );
}

export default LogIn;
