
import React, { useState } from "react";

const UploadPhoto = ({ onPhotoUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    onPhotoUpload(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && <img src={file} alt="Uploaded" width="200" />}
    </div>
  );
};

export default UploadPhoto;