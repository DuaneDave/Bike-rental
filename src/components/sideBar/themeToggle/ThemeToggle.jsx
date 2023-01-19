import { useState } from 'react';
import { MdLightMode, MdNightsStay } from 'react-icons/md';

import styles from './ThemeToggle.module.css';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (mode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
  }

  return (
    <div className={styles.theme + ' flex center'}>
      {theme === 'light' ? (
        <span className='flex center'>
          <MdLightMode
            onClick={() => {
              handleThemeChange('dark');
              document.body.classList.toggle('dark');
            }}
            className={styles.light}
          />
        </span>
      ) : (
        <span className='flex center'>
          <MdNightsStay
            onClick={() => {
              handleThemeChange('light');
              document.body.classList.toggle('dark');
            }}
            className={styles.dark}
          />
        </span>
      )}
    </div>
  );
}

export default ThemeToggle;