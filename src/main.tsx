import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

import App from './App.tsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E3000B',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '700',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#E3000B',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
