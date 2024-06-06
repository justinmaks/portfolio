// src/Profile.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './Profile';

test('renders profile component', () => {
  render(<Profile />);
  
  // Check for the presence of profile information
  expect(screen.getByText(/Justin Maksimczuk/i)).toBeInTheDocument();
  expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
  
  // Check for the presence of LinkedIn icon and link
  const linkedInLink = screen.getByLabelText('LinkedIn');
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/justin-maksimczuk');
  
  // Check for the presence of GitHub icon and link
  const gitHubLink = screen.getByLabelText('GitHub');
  expect(gitHubLink).toBeInTheDocument();
  expect(gitHubLink.closest('a')).toHaveAttribute('href', 'https://github.com/justinmaks');
  
  // Check for the presence of Email icon and link
  const emailLink = screen.getByLabelText('Email');
  expect(emailLink).toBeInTheDocument();
  expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:justin@maksimczuk.com');
  
  // // Check for the presence of PGP key icon and link
  // const pgpLink = screen.getByLabelText('PGP Key');
  // expect(pgpLink).toBeInTheDocument();
  // expect(pgpLink.closest('a')).toHaveAttribute('href', '/pgp-key');
  
  // Check for the presence of XMPP icon
  const xmppLink = screen.getByLabelText('XMPP');
  expect(xmppLink).toBeInTheDocument();
  
  // Simulate hover to open popover
  fireEvent.mouseEnter(xmppLink);
  
  // Check if the popover with the XMPP address is displayed
  const xmppPopover = screen.getByText('stin@xmpp.jp');
  expect(xmppPopover).toBeInTheDocument();
});

