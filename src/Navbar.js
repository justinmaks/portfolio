// src/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Box>
          <Button color="inherit" component={Link} to="/" style={{ fontSize: '1.25rem' }}>Home</Button>
          <Button color="inherit" component={Link} to="/projects" style={{ fontSize: '1.25rem' }}>Projects</Button>
          <Button color="inherit" component={Link} to="/snake" style={{ fontSize: '1.25rem' }}>Snake</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
