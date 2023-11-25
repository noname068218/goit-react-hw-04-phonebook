import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

export const ThemeProviderWrapper = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'light' : 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={toggleDarkMode}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </Button>
      {children}
    </ThemeProvider>
  );
};
