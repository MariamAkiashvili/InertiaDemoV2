import React, { useState } from "react";

function ImageUploadPopup() {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (e) => {
        e.preventDefault();
        setSelectedFiles(e.target.files);
    };

    const handleSubmit = async (files) => {
    
    const formData = new FormData();

    for(let i = 0 ; i < selectedFiles.length; i++){
        formData.append("file", selectedFiles[i]);
    }

    fetch("http://localhost:8080/Upload/Image",{
            method:"POST",
            body:formData
            }).then((response)=>{
                console.log(response.data);
            }).catch((error)=> {
                console.error(error);
            });

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileSelect} />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default ImageUploadPopup;