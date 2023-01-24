import { useState } from 'react';
import UseChange from '../hooks/UseChange';
import UseFileUpload from '../hooks/useFileUpload';
import { Link, useNavigate } from 'react-router-dom';
import { useAddUserMutation } from '../components/api/apiSlice';

import Modal from '../reusables/notifications/modal/Modal';

import Input from '../reusables/inputFields/Inputs';
import FileUpload from '../reusables/inputFields/FileUpload';
import Container from '../reusables/container/Container';

function SignUp() {
  const [showModal, setShowModal] = useState({
    alert: false,
    message: '',
    type: '',
  });
  const [username, handleUsernameChange] = UseChange('');
  const [email, handleEmailChange] = UseChange('');
  const [password, handlePasswordChange] = UseChange('');
  const [confirmPassword, handleConfirmPasswordChange] = UseChange('');
  const { file, preview, handleFileChange } = UseFileUpload();

  const [addUser] = useAddUserMutation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setShowModal({
        alert: true,
        message: 'Please fill in all fields',
        type: 'error',
      });
      return;
    } else if (password !== confirmPassword) {
      setShowModal({
        alert: true,
        message: 'Passwords do not match',
        type: 'error',
      });
      return;
    } else if (password.length < 6) {
      setShowModal({
        alert: true,
        message: 'Password must be at least 6 characters',
        type: 'error',
      });
      return;
    } else if (username.length < 3) {
      setShowModal({
        alert: true,
        message: 'Username must be at least 3 characters',
        type: 'error',
      });
      return;
    } else if (!email.includes('@')) {
      setShowModal({
        alert: true,
        message: 'Please enter a valid email',
        type: 'error',
      });
      return;
    } else {
      const avatar = file ? preview : null;
      const data = { username, email, password, avatar };
      localStorage.setItem('user', JSON.stringify(data));

      addUser({
        name: username,
        email,
        password,
      });
    }

    navigate('/');
  };

  return (
    <>
      <Container>
        <div className="form-container flex flex-column">
          <form onSubmit={handleSubmit} className="flex flex-column">
            <FileUpload
              file={file}
              preview={preview}
              handleFileChange={handleFileChange}
            />
            <Input
              label="Username"
              type="text"
              value={username}
              onChange={(e) => handleUsernameChange(e)}
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e)}
            />
            <button type="submit">Sign Up</button>
            <span className="flex gap">
              <p>Already have an account?</p>
              <Link to="/" className="redirect">
                Log In
              </Link>
            </span>
          </form>
        </div>
      </Container>
      {showModal.alert && (
        <Modal
          message={showModal.message}
          type={showModal.type}
          onClose={() =>
            setShowModal({ alert: false, message: '', type: '' })
          }
        />
      )}
    </>
  );
}

export default SignUp;
