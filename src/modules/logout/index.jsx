import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function Logout() {
  return (
    <ThemeProvider theme={theme}>
      logout
    </ThemeProvider>
  );
}