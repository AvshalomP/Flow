import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './styles';
import Routes from './routes';

function App() {
  const [theme, setTheme] = useState('dark');
  const obj = theme === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <BrowserRouter>
      <ThemeProvider theme={{obj, currTheme: theme, toggleTheme}}>
        <>
          <GlobalStyles />
          <Routes />
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
