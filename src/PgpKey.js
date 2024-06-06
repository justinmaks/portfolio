// src/PgpKey.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PgpKey = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        position: 'relative',
        zIndex: 1,
        marginTop: '100px',
        color: 'white',
        overflowY: 'auto',  // Ensure the container can scroll vertically
        maxHeight: '80vh',  // Limit the maximum height to allow for scrolling
      }}
    >
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" component="h1" gutterBottom>
          PGP Key
        </Typography>
        <Box
          component="pre"
          sx={{
            textAlign: 'left',
            backgroundColor: 'black',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            whiteSpace: 'pre-wrap',  // Ensures the text wraps correctly
            wordBreak: 'break-word',  // Breaks long words to fit in the box
            overflow: 'auto',  // Adds scrollbars within the pre box
            maxHeight: '60vh',  // Sets a maximum height for the pre box
          }}
        >
          {`-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=Djul
-----END PGP PUBLIC KEY BLOCK-----
`}
        </Box>
      </Box>
    </Container>
  );
};

export default PgpKey;
