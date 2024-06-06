// src/Tools.js
import React, { useState } from 'react';
import { Container, TextField, Button, Box } from '@mui/material';

const Tools = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
      <Box textAlign="center" mt={5}>
        <TextField
          label="Input"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          fullWidth
        />
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Tools;
