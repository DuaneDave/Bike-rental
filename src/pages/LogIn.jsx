import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../components/api/apiSlice';
import UseChange from '../hooks/UseChange';

import sessionStorage from '../helpers/sessions';

import Input from '../reusables/inputFields/Inputs';
import Container from '../reusables/container/Container';
import Modal from '../reusables/notifications/modal/Modal';

function LogIn() {
  const [modal, setModal] = useState({ isError: false, message: '', type: '' });
  const [username, handleUsernameChange] = UseChange('');
  const [email, handleEmailChange] = UseChange('');
  const [password, handlePasswordChange] = UseChange('');

  const navigate = useNavigate();
  const { data: users } = useGetUsersQuery();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setModal({
        isError: true,
        message: 'Oops fields cannot be empty, please fill in all fields !',
        type: 'error',
      });
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
        setModal({
          isError: true,
          message:
            'User does not exist, confirm entered data or sign up a new account',
          type: 'error',
        });
        return;
      } else {
        // const reload = () => {
          sessionStorage('set', user);
        const userSec = sessionStorage('get');
        if (userSec) {
          navigate('/home');
          window.location.reload();
        }
        //   window.location.reload();
        //   return () => {
        //     navigate('/home');
        //   }
        // }
        // const reloaded = reload();
        // setTimeout(() => {
        //   reloaded();
        //   // navigate('/home');
        //   // window.location.reload();
        // }, 100);
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
      {modal.isError && (
        <Modal
          message={modal.message}
          type={modal.type}
          onClose={() => setModal({ isError: false, message: '', type: '' })}
        />
      )}
    </Container>
  );
}

export default LogIn;
