import { useState } from 'react';

function UseFileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);

    if (e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return { file, preview, handleFileChange };
}

export default UseFileUpload;
