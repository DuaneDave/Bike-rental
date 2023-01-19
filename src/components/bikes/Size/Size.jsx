import styles from './Size.module.css';

function Size() {
  return (
    <div className={styles.sizes + ' flex flex-column'}>
      <h3>Select a size</h3>
      <ul className='flex gap'>
        <li className={styles.size}>S</li>
        <li className={styles.size}>M</li>
        <li className={styles.size}>L</li>
        <li className={styles.size}>XL</li>
      </ul>
    </div>
  );
}

export default Size;
