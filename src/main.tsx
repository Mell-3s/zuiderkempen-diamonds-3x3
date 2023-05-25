import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

import App from './App.tsx';

import './index.scss';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E3000B',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingBottom: '2rem',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      fontWeight: '700',
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      fontWeight: '700',
    },
    h3: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      fontWeight: '600',
      color: '#E3000B',
    },
    h4: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
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
