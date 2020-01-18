import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const HomeBtn = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const ThemeBtn = styled.div.attrs(({ theme }) => ({
  onClick: theme.toggleTheme,
}))`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;