import React from 'react';
import { Tasks } from './Tasks';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './theme/lightTheme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Tasks />
    </ThemeProvider>
  );
};

export default App;
