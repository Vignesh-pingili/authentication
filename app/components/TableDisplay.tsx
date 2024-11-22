import { Box, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';

const TableDisplay = ({ csvData, hasHeaders, setJsonOutput, setHeaders }) => {
  const [mappedLabels, setMappedLabels] = useState({});
  const [error, setError] = useState("");

  const startRow = hasHeaders ? 1 : 0; // Skip header row if it exists
  const dataRow = csvData[startRow];
  const columns = csvData[0].length;

  const handleLabelChange = (column, value) => {

    setError("")    
    setMappedLabels((prev) => ({
      ...prev,
      [column]: value,
    }));
  };


  const generateJson = () => {
      const result = {};
      var isEmptyError = false;

    
    for (let i = 0; i < columns; i++) {
      const columnLabel = String.fromCharCode(65 + i); // 'A', 'B', 'C', ...
      if(mappedLabels[columnLabel] == "" || mappedLabels[columnLabel] == undefined){
        console.log(mappedLabels[columnLabel],"label empty");
        
            setError("No column label should not be empty");
            isEmptyError = true;
            break;
      }      
      result[columnLabel] = mappedLabels[columnLabel] || ``;
    }

    console.log(result,"results",error);
    
    if(error == "" && isEmptyError == false){
    setJsonOutput(result);
    }

  };

  return (
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Card sx={{p:8,display:"inline-block"}}>
 <div style={{border:"1px solid #adada8",borderRadius:18,display:"inline-block",padding:12}}>
       <Typography sx={{fontSize:"26px",paddingBottom:2}}>Map Columns to Labels</Typography>
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
      <Button variant='outlined' onClick={() => generateJson()} style={{ marginTop: '20px' }}>
        Done
      </Button>
      <Typography sx={{color:"red"}}>{error}</Typography>
    </div>
      </Card>
   
    </Box>

  );
};

export default TableDisplay;
