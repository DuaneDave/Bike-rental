import { BsTwitter } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import { IoLogoVimeo } from 'react-icons/io';

import styles from './Sidebar.module.css';

function Socials() {
  return (
    <div className={styles.socials + ' flex flex-column gap center'}>
      <span className='flex gap'>
        <BsTwitter />
        <GrFacebookOption />
        <AiOutlineGooglePlus />
        <FaPinterestP />
        <IoLogoVimeo />
      </span>

      <small>
        &copy; {new Date().getFullYear()} Trek. All rights reserved.
      </small>
    </div>
  );
}

export default Socials;
