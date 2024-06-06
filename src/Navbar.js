// src/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Box>
          <Button color="inherit" component={Link} to="/" style={{ fontSize: '2.00rem' }}>Home</Button>
          <Button color="inherit" component={Link} to="/tools" style={{ fontSize: '2.00rem' }}>Tools</Button>
          <Button color="inherit" component={Link} to="/snake" style={{ fontSize: '2.00rem' }}>Snake</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
