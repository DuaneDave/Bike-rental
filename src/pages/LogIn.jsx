import { useState } from 'react';

import Input from '../reusables/inputFields/Inputs';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}

export default LogIn;
