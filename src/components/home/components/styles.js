import React from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';
import { FaRegSun, FaMoon } from 'react-icons/fa';

const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SunIcon = styled(FaRegSun)`
  font-size: 18px;
`;

const MoonIcon = styled(FaMoon)``;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const HomeBtn = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const ThemeBtn = styled(Switch).attrs(({ theme }) => ({
  onChange: theme.toggleTheme,
  checked: theme.currTheme === 'dark',
  checkedIcon: <CenterFlex><MoonIcon /></CenterFlex>,
  uncheckedIcon: <CenterFlex><SunIcon /></CenterFlex>,
  onColor: theme.obj.body,
  offColor: theme.obj.body,
  offHandleColor: theme.obj.text,
}))`
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.obj.border}`} ;
`;
