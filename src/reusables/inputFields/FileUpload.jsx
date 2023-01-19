import { BsFileEarmarkDiff } from 'react-icons/bs';
import { MdOutlineAttachFile } from 'react-icons/md';

function FileUpload({ label, className, preview, handleFileChange, file }) {
  return (
    <div>
      <div className='view'>
        {preview ? (
          <img src={preview} alt={file.name} />
        ) : (
          <BsFileEarmarkDiff />
        )}
      </div>
      <label>
        {label}
        <MdOutlineAttachFile />
        <input type='file' onChange={handleFileChange} />
      </label>
    </div>
  );
}

export default FileUpload;
