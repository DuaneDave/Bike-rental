
import Brand from './brand/Brand'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiUser, CiLogout } from 'react-icons/ci';
import { RiReservedLine } from 'react-icons/ri';
import { AiOutlineProfile } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { MdBookmarkRemove } from 'react-icons/md';

import styles from './Sidebar.module.css';
import Socials from './Socials';

function Sidebar() {
  const [toggled, setToggled] = useState(false);

  const avatar = JSON.parse(localStorage.getItem('user'));

  return (

    <header className='flex center'>
      <button
        onClick={() => setToggled(!toggled)}
        color={toggled ? 'green' : 'red'}
        className={
          toggled ? styles.move : styles.hamburger
        }
      >
        {toggled ? '<<' : '>>'}
      </button>

      <span className={styles.avatar}>
        {avatar ? (
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

        <Link to='/' className={styles.logout + ' flex center gap'}>
          <CiLogout />
          <p>Log out</p>
        </Link>

        <Socials />
      </nav>
    </header>
  );
}

export default Sidebar;
