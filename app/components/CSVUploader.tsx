import Papa from 'papaparse';
import { useState } from 'react';

const CSVUploader = ({ onUpload }) => {
  const [hasHeaders, setHasHeaders] = useState(null);

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
        <p>Does your file have headers?</p>
        <label>
          <input
            type="radio"
            value="yes"
            checked={hasHeaders === true}
            onChange={() => handleYes()}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={hasHeaders === false}
            onChange={() => handleNo()}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default CSVUploader;
