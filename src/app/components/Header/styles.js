"use client"
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: #fff;
  padding-left: 30px;
  padding-right: 30px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center; 
`;

export const NavLinks = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }

  li {
    margin-left: 1rem;
    display: flex; 
    align-items: center; 
  }

  a {
    color: #121212; 
    text-decoration: none;
    font-size: 20px;
    font-weight: 500; 
    transition: color 0.3s ease; 


    &:hover {
      color: #3333; 
    }
  }
`;
