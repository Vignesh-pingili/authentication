import { Box, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';

const TableDisplay = ({ csvData, hasHeaders, setJsonOutput }) => {
  const [mappedLabels, setMappedLabels] = useState({});
  const [error, setError] = useState("");

  const startRow = hasHeaders == "yes" ? 1 : 0; 
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

    console.log(result,"results",error,typeof(result));
    
    if(error == "" && isEmptyError == false){
    setJsonOutput(result);
    }

  };

  if(csvData){
  return(
    <Box sx={{p:4,alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <table style={{maxWidth:"750px"}}>
  <caption>Sample Table</caption>
  <thead>
    <tr>
      <th>Column</th>
      <th>Value</th>
      <th>Label(UserInput)</th>
    </tr>
  </thead>
         <tbody>
          {dataRow?.map((value, index) => {
            const columnLabel = String.fromCharCode(65 + index); // Generate 'A', 'B', etc.
            return (
              <tr key={index}>
                <td>{columnLabel}</td>
                <td>{value}</td>
                <td>
                  <input style={{height:"34px"}}
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
       <Button variant='outlined' onClick={() => generateJson()} style={{ marginTop: '20px' }}>         Done
     </Button>
     <Typography sx={{color:"red"}}>{error}</Typography>
    </Box>
          
  )
  }

  return(<Box></Box>)
};

export default TableDisplay;
