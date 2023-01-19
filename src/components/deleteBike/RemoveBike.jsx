import { useState } from 'react';
import Modal from '../../reusables/notifications/modal/Modal';

import styles from './RemoveBike.module.css';

function RemoveBike({ data, onRequest }) {
  const [showModal, setShowModal] = useState({
    alert: false,
    message: '',
    type: '',
  });

  const deleteRequestHandler = (bikeId, bikeName) => {
    onRequest(bikeId)
      .unwrap()
      .then(() => {
        setShowModal({
          alert: true,
          message: `Yaaaay! You successfully deleted ${bikeName}`,
          type: 'success',
        });
      })
      .catch(() => {
        setShowModal({
          alert: true,
          message: `Oops! Something went wrong with deleting ${bikeName}`,
          type: 'error',
        });
      });
  };

  return (
    <>
      <div className={styles.deleteBikeContainer + " flex flex-column center"}>
        <div className='grid gap'>
          {data.map((bike) => (
            <div key={bike.id}>
              <img src={bike.images[Object.keys(bike.images)[0]]}></img>
              <div className={styles.actions + ' flex'}>
                <h2>
                  {bike.name}
                  {bike.brand}
                </h2>
                <button
                  onClick={() => deleteRequestHandler(bike.id, bike.name)}
                >
                  Detele
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal.alert && (
        <Modal
          message={showModal.message}
          type={showModal.type}
          onClose={() => setShowModal({ alert: false })}
        />
      )}
    </>
  );
}

export default RemoveBike;
