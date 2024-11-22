import { Typography } from '@mui/material';
import { useState } from 'react';

const TableDisplay = ({ csvData, hasHeaders, setJsonOutput, setHeaders }) => {
  const [mappedLabels, setMappedLabels] = useState({});
  const [error, setError] = useState("");

  const startRow = hasHeaders ? 1 : 0; // Skip header row if it exists
  const dataRow = csvData[startRow];
  const columns = csvData[0].length;

  const handleLabelChange = (column, value) => {
    setMappedLabels((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const generateJson = () => {
    const result = {};
    for (let i = 0; i < columns; i++) {
      const columnLabel = String.fromCharCode(65 + i); // 'A', 'B', 'C', ...
      if(mappedLabels[columnLabel] == "" || mappedLabels[columnLabel] === undefined){
            setError("No column should not be empty");
            break;
      }      
      result[columnLabel] = mappedLabels[columnLabel] || ``;
    }
    if(error != ""){
    setJsonOutput(result);
    setHeaders(false);
    }

  };

  return (
    <div>
      <h2>Map Columns to Labels</h2>
      <table cellPadding="10">
        <thead>
          <tr>
            <th>Column</th>
            <th>Value</th>
            <th>Label (User Input)</th>
          </tr>
        </thead>
        <tbody>
          {dataRow.map((value, index) => {
            const columnLabel = String.fromCharCode(65 + index); // Generate 'A', 'B', etc.
            return (
              <tr key={index}>
                <td>{columnLabel}</td>
                <td>{value}</td>
                <td>
                  <input
                    type="text"
                    placeholder={`Label for ${columnLabel}`}
                    onChange={(e) =>
                      handleLabelChange(columnLabel, e.target.value)
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={generateJson} style={{ marginTop: '20px' }}>
        Done
      </button>
      <Typography sx={{color:"red"}}>{error}</Typography>
    </div>
  );
};

export default TableDisplay;
