import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './styles';
import Routes from './routes';

function App() {
  const [theme, setTheme] = useState('dark');
  const obj = theme === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeProvider theme={{obj, toggleTheme}}>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </ThemeProvider>
  );
}

export default App;
