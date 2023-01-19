import styles from './Modal.module.css';

import error from '../../../assets/error.jpg';
import success from '../../../assets/success.jpg';

function Modal({ message, onClose, type }) {
  return (
    <>
      <div onClick={onClose} className='backdrop flex flex-column'></div>
      <div className={styles.modalContainer + ' flex flex-column gap'}>
        <div className={styles.modalMessage + ' grid gap'}>
          {type === 'success' ? (
            <img src={success} alt='success' />
          ) : (
            <img src={error} alt='error' />
          )}
          <p>{message}</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default Modal;
