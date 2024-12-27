// Assuming you imported `UploadIconSupplier` as a component or image URL
import React, { useState } from 'react';
const UploadIconSupplier = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/uploadicon.svg";

const CustomUpload = ({ upload_file, setUploadFile }) => {
  
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setUploadFile(selectedFile);

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleUploadClick = () => {
    if (!upload_file) {
      alert("Please select a file to upload!");
      return;
    }

    alert(`File "${upload_file.name}" uploaded successfully!`);
  };

  return (
    <div className="upload-container">
      <label className="upload-label" htmlFor="fileInput">
        {preview ? (
          <img src={preview} alt="preview" className="preview-image" />
        ) : (
          <img src={UploadIconSupplier} alt="Upload icon" className="upload-icon" />
        )}
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        className="file-input"
      />

      <button onClick={handleUploadClick} className="upload-button">
        <p><strong>Click to upload logo</strong> or drag and drop</p>
        <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
      </button>
    </div>
  );
};

export default CustomUpload;
