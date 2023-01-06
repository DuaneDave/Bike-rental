import { useEffect, useState } from 'react';

import { BsFileEarmarkDiff } from 'react-icons/bs';
import { MdOutlineAttachFile } from 'react-icons/md';

function FileUpload({ label, className }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }, [file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <div>
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
