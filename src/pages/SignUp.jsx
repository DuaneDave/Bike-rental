import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../reusables/inputFields/Inputs';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!username || !email || !password || !confirmPassword) {
  //     alert('Please fill in all fields');
  //     return;
  //   } else if (password !== confirmPassword) {
  //     alert('Passwords do not match');
  //     return;
  //   } else if (password.length < 6) {
  //     alert('Password must be at least 6 characters');
  //     return;
  //   } else if (username.length < 3) {
  //     alert('Username must be at least 3 characters');
  //     return;
  //   } else if (!email.includes('@')) {
  //     alert('Please enter a valid email');
  //     return;
  //   } else {
  //     const data = { username, email, password, confirmPassword };
  //     localStorage.setItem('data', JSON.stringify(data));
  //   }

  //   setUsername('');
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');

  //   window.location.href = '/';
  // };

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
      <Input
        label='Confirm Password'
        type='password'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />

      <button type='submit'>Sign Up</button>

      <p>
        Already have an account? <Link to='/'>Log In</Link>
      </p>
    </form>
  );
}

export default SignUp;
