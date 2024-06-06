// src/Profile.js
import React, { useState } from 'react';
import { Container, Typography, Box, IconButton, Popover } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ChatIcon from '@mui/icons-material/Chat'; // Icon for XMPP

const Profile = () => {
  const [anchorElEmail, setAnchorElEmail] = useState(null);
  const [anchorElXMPP, setAnchorElXMPP] = useState(null);

  const handleEmailPopoverOpen = (event) => {
    setAnchorElEmail(event.currentTarget);
  };

  const handleEmailPopoverClose = () => {
    setAnchorElEmail(null);
  };

  const openEmail = Boolean(anchorElEmail);

  const handleXmppPopoverOpen = (event) => {
    setAnchorElXMPP(event.currentTarget);
  };

  const handleXmppPopoverClose = () => {
    setAnchorElXMPP(null);
  };

  const openXMPP = Boolean(anchorElXMPP);

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
          <a href="https://www.linkedin.com/in/justin-maksimczuk" target="_blank" rel="noreferrer">
            <IconButton aria-label="LinkedIn" color="primary">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </a>
          <a href="https://github.com/justinmaks" target="_blank" rel="noreferrer">
            <IconButton aria-label="GitHub" color="primary">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
          <a
            href="mailto:justin@maksimczuk.com"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleEmailPopoverOpen}
            onMouseLeave={handleEmailPopoverClose}
          >
            <IconButton aria-label="Email" color="primary">
              <EmailIcon fontSize="large" />
            </IconButton>
          </a>
          <Popover
            id="email-popover"
            sx={{
              pointerEvents: 'none',
            }}
            open={openEmail}
            anchorEl={anchorElEmail}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handleEmailPopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>justin@maksimczuk.com</Typography>
          </Popover>
          <a href="/pgp-key" target="_blank" rel="noreferrer">
            <IconButton aria-label="PGP Key" color="primary">
              <LockIcon fontSize="large" />
            </IconButton>
          </a>
          <IconButton
            aria-label="XMPP"
            color="primary"
            onMouseEnter={handleXmppPopoverOpen}
            onMouseLeave={handleXmppPopoverClose}
            onClick={handleXmppPopoverOpen}
          >
            <ChatIcon fontSize="large" />
          </IconButton>
          <Popover
            id="xmpp-popover"
            sx={{
              pointerEvents: 'none',
            }}
            open={openXMPP}
            anchorEl={anchorElXMPP}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handleXmppPopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>stin@xmpp.jp</Typography>
          </Popover>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
