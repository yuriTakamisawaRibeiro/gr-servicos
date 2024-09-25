"use client"

import styled from 'styled-components';

export const ButtonStyled = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:transparent;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
