import { CiUser } from 'react-icons/ci';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs';

import styles from './Input.module.css';

function FileUpload({ preview, handleFileChange, file, type }) {
  return (
    <div
      className={
        type === 'upload'
          ? `${styles.uploadImgContainer} flex gap`
          : 'flex flex-column gap center'
      }
    >
      {type === 'upload' ? (
        <div className={styles.uploadImage + ' flex center'}>
          {preview ? <img src={preview} alt={file.name} /> : <BsUpload />}
        </div>
      ) : (
        <div className={styles.avatar}>
          {preview ? (
            <img src={preview} alt={file.name} />
          ) : (
            <span className="flex center">
              <CiUser />
            </span>
          )}
        </div>
      )}
      <label className={styles.upload}>
        Upload photo <MdOutlineCloudUpload />
        <input type="file" onChange={handleFileChange} />
      </label>
    </div>
  );
}

export default FileUpload;
