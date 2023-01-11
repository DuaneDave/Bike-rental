import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CiUser, CiLogout } from 'react-icons/ci';
import { RiReservedLine } from 'react-icons/ri';
import { AiOutlineProfile } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { MdBookmarkRemove } from 'react-icons/md';

import sessionStorage from '../../helpers/sessions';

import styles from './Sidebar.module.css';
import Socials from './Socials';

function Sidebar() {
  const [toggled, setToggled] = useState(false);
  const avatar = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage('remove');
    navigate('/');
    window.location.reload();
  };

  return (
    <header className='flex center'>
      <button
        onClick={() => setToggled(!toggled)}
        color={toggled ? 'green' : 'red'}
        className={toggled ? styles.move : styles.hamburger}
      >
        {toggled ? '<<' : '>>'}
      </button>

      <span
        className={styles.avatar}
        onClick={() => navigate('/my_reservations')}
      >
        {avatar.avatar ? (
          <img src={avatar.avatar} />
        ) : (
          <span className='flex center'>
            <CiUser />
          </span>
        )}
      </span>
      <nav
        className={
          toggled ? styles.toggle + ' flex flex-column' : 'flex flex-column'
        }
      >
        <Link to='/home' className={styles.logo}>
          Trek
        </Link>
        <ul className='flex flex-column'>
          <li>
            <Link to='/reserve' className='flex gap'>
              <RiReservedLine /> Reserve
            </Link>
          </li>
          <li>
            <Link to='/reservations' className='flex gap'>
              <AiOutlineProfile /> My Reservations
            </Link>
          </li>
          <li>
            <Link to='/add_bike' className='flex gap'>
              <BiAddToQueue />
              Add a bike
            </Link>
          </li>
          <li>
            <Link to='/delete_bike' className='flex gap'>
              <MdBookmarkRemove />
              Remove a bike
            </Link>
          </li>
        </ul>

        <span
          className={styles.logout + ' flex center gap'}
          onClick={handleLogout}
        >
          <CiLogout />
          <p>Log out</p>
        </span>

        <Socials />
      </nav>
    </header>
  );
}

export default Sidebar;
