import UseChange from '../hooks/UseChange';
import { Link } from 'react-router-dom';

import Input from '../reusables/inputFields/Inputs';

function SignUp() {
  const [username, handleUsernameChange] = UseChange('');
  const [email, handleEmailChange] = UseChange('');
  const [password, handlePasswordChange] = UseChange('');
  const [confirmPassword, handleConfirmPasswordChange] = UseChange('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    } else if (username.length < 3) {
      alert('Username must be at least 3 characters');
      return;
    } else if (!email.includes('@')) {
      alert('Please enter a valid email');
      return;
    } else {
      const data = { username, email, password, confirmPassword };
      localStorage.setItem('data', JSON.stringify(data));
    }

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    window.location.href = '/';
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
      <Input
        label='Confirm Password'
        type='password'
        value={confirmPassword}
        onChange={(e) => handleConfirmPasswordChange(e)}
      />

      <button type='submit'>Sign Up</button>

      <p>
        Already have an account? <Link to='/'>Log In</Link>
      </p>
    </form>
  );
}

export default SignUp;
