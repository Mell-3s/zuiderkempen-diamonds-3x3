import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import App from './App.tsx';

import './index.scss';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E3000B',
    },
    secondary: {
      main: '#F6F6F6',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingBottom: '2rem',
          paddingTop: '2rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#E3000B',
          width: 60,
          height: 8,
          borderRadius: 4,
          margin: '1rem 0',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    allVariants: {
      color: '#222222',
    },
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
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
      margin: '1rem 0',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '600',
      margin: '1rem 0',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
