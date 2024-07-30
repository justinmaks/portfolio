// src/Tools.js
import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';

const Tile = ({ text, url }) => {
  return (
    <Box
      border={1}
      borderRadius={8}
      padding={2}
      textAlign="center"
      margin={2}
      style={{
        cursor: 'pointer',
        borderColor: '#ccc', // Outline color
        borderWidth: 2,      // Outline thickness
        backgroundColor: 'rgba(51, 51, 51, 0.1)', 
        //backgroundColor: '#333', // Background color for contrast
      }}
    >
      <Link href={url} target="_blank" rel="noopener noreferrer" underline="none">
        <Typography variant="h6" style={{ color: 'white' }}>
          {text}
        </Typography>
      </Link>
    </Box>
  );
};

const Tools = () => {
  const tiles = [
    { text: "IP Retrieval API - FastAPI Python", url: "https://ip.devmaks.biz" },
    // Add more
  ];

  return (
    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        {tiles.map((tile, index) => (
          <Tile key={index} text={tile.text} url={tile.url} />
        ))}
      </Box>
    </Container>
  );
};

export default Tools;
