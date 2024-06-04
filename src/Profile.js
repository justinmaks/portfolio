import React from 'react';
import { Container, Typography, Box, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
  return (
    <Container maxWidth="sm" style={{ position: 'relative', zIndex: 1, marginTop: '100px', color: 'white' }}>
      <Box textAlign="center" mt={5}>
        <Typography variant="h3" component="h1" gutterBottom>
          Justin Maksimczuk
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Software Engineer
        </Typography>
        <Box mt={3}>
          <Link href="https://www.linkedin.com/in/justin-maksimczuk" target="_blank" rel="noopener">
            <IconButton aria-label="LinkedIn" color="primary">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Link>
          <Link href="https://github.com/justinmaks" target="_blank" rel="noopener">
            <IconButton aria-label="GitHub" color="primary">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
