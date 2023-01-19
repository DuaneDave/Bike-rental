import UseChange from '../hooks/UseChange';
import UseFileUpload from '../hooks/useFileUpload';
import { Link } from 'react-router-dom';

import Input from '../reusables/inputFields/Inputs';
import FileUpload from '../reusables/inputFields/FileUpload';
import Container from '../reusables/container/Container';

function SignUp() {
  const [username, handleUsernameChange] = UseChange('');
  const [email, handleEmailChange] = UseChange('');
  const [password, handlePasswordChange] = UseChange('');
  const [confirmPassword, handleConfirmPasswordChange] = UseChange('');
  const { file, preview, handleFileChange } = UseFileUpload();

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
      const avatar = file ? preview : null;
      const data = { username, email, password, confirmPassword, avatar };
      localStorage.setItem('user', JSON.stringify(data));
    }

    window.location.href = '/';
  };

  return (
    <Container>
      <div className='form-container flex flex-column'>
        <form onSubmit={handleSubmit} className='flex flex-column'>
          <FileUpload
            file={file}
            preview={preview}
            handleFileChange={handleFileChange}
          />
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
          <span className='flex gap'>
            <p>Already have an account?</p>
            <Link to='/' className='redirect'>
              Log In
            </Link>
          </span>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
