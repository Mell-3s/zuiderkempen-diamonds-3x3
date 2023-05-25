import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

import App from './App.tsx';

import './index.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E3000B',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
