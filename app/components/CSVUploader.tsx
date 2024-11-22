"use client"
import Papa from 'papaparse';
import { useState } from 'react';

const CSVUploader = ({ onUpload }) => {

    const [header, setheader] = useState(null)
  var data = null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        data = result.data;
      },
    });
  };

  const handleYes = () => {
    if(data){
onUpload(data, true);
    }
   
  }

  const handleNo = () => {
    if(data){
        onUpload(data,false)
    }
    
  }


  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <div>
        <p style={{padding:2}}>Does your file have headers?</p>
        <label>
          <input style={{padding:4}}
            type="radio"
            value="true"
            id="true"
            checked = { header == true}
            onChange={() => handleYes()}
          />
          Yes
        </label>
        <label>
          <input
          id="false"
            type="radio"
            value="false"
            checked = {header == false}
            onChange={() => handleNo()}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default CSVUploader;
