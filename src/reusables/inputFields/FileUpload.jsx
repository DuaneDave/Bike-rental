import { CiUser } from 'react-icons/ci'
import { MdOutlineCloudUpload } from 'react-icons/md';


import styles from './Input.module.css';

function FileUpload({ label, preview, handleFileChange, file }) {
  return (
    <div className='flex flex-column gap center'>
      <div className={styles.avatar}>
        {preview ? (
          <img src={preview} alt={file.name} />
        ) : (
          <span className='flex center'>
            <CiUser />
          </span>
        )}
      </div>
      <label className={styles.upload}>
        Upload photo <MdOutlineCloudUpload />
        <input type='file' onChange={handleFileChange} />
      </label>
    </div>
  );
}

export default FileUpload;
