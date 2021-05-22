// import React from 'react';
import React, { useEffect, useState } from "react";
import {storage} from '../util/Firestore';

function ImageUpload() {
  const [files, setFiles] = useState([])
  
  const onFileChange = e => {
    for (let i = 0; i < e.target.files.length; i++) {
         const newFile = e.target.files[i];
         newFile["id"] = Math.random();
      // add an "id" property to each File object
         setFiles(prevState => [...prevState, newFile]);
    }
  };

  const onUploadSubmission = e => {
    e.preventDefault(); // prevent page refreshing
    const promises = [];
    files.forEach(file => {
      const uploadTask = 
      storage.ref().child(`images/${file.name}`).put(file);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === "running") {
            console.log(`Progress: ${progress}%`);
          }
        },
        error => console.log(error.code),
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          // do something with the url
        }
      );
    });

    Promise.all(promises)
    .then(() => alert('All files uploaded'))
    .catch(err => console.log(err.code));
   }
   
    return (
      <form>
        <label>Select Files         
          <input type="file" multiple onChange={onFileChange} />
        </label>
        <button onClick={onUploadSubmission}>Upload</button>
      </form>
    );
  
}

export default ImageUpload;