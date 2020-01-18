import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.obj.body};
    color: ${({ theme }) => theme.obj.text};
    border-color: ${({ theme }) => theme.obj.border};
  }
`;
