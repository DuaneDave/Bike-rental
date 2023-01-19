import { Triangle } from 'react-loader-spinner';

import styles from './Spinner.module.css';

const Spiner = () => {
  return (
    <div className={styles.spinner + ' flex center'}>
      <Triangle
        height='100'
        width='100'
        color='limegreen'
        ariaLabel='triangle-loading'
        wrapperStyle={{}}
        wrapperClassName=''
        visible={true}
      />
    </div>
  );
};

export default Spiner;
