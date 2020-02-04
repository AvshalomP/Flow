import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './styles';
import Routes from './routes';
import { store } from './store';

function App() {
  const [theme, setTheme] = useState('dark');
  const obj = theme === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={{obj, currTheme: theme, toggleTheme}}>
          <>
            <GlobalStyles />
            <Routes />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
